const express = require('express')
const app = express()
const morgan = require('morgan')
const PORT = 3001

app.use(express.json())
app.use(morgan('tiny'))

morgan.token('body', function (req, res) {
  if (req.method !== 'POST') return " ";
  return JSON.stringify(req.body);
});
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body')
);

let albums = [
  { 
    "id": 1,
    "albumname": "Taylor Swift", 
    "year": "2006"
  },
  { 
    "id": 2,
    "albumname": "Fearless", 
    "year": "2008"
  },
  { 
    "id": 3,
    "albumname": "Speak Now", 
    "year": "2010"
  },
  { 
    "id": 4,
    "albumname": "Red", 
    "year": "2012"
  }
]

app.get('/api/albums', (req, res) => {
    res.json(albums)
})

app.get('/info', (req, res) => {
    const currentDate = new Date()
    res.send(`<h4>Database has info for ${albums.length} albums.</h4> <h4>${currentDate}</h4>`)
})

app.get('/api/albums/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = albums.find(album => album.id === id)
    
    if (album) {
      res.json(album)
    } else {
      res.status(404).end()
    }
  })

app.delete('/api/albums/:id', (req, res) => {
    const id = Number(req.params.id)
    const albums = albums.filter(album => album.id !== id) 
    res.status(204).end()
})

const generateId = () => {
  const maxId = albums.length > 0
    ? Math.max(...albums.map(p => p.id))
    : 0
  return maxId + 1
}

app.post('/api/albums', (req, res) => {
    const body = req.body
    
    if (!body.albumname){
      return res.status(400).json({ 
        error: 'Album name is missing.' 
      })
    }

    if (!body.year){
      return res.status(400).json({ 
        error: 'Album year is missing.' 
      })
    }

    if (albums.some(album => album.albumname === body.albumname)){
      return res.status(409).json({ 
        error: 'Album name must be unique.' 
      })
    }
    
    const album = {
        id: generateId(),
        albumname: body.albumname, 
        year: body.year,
    }

    albums = albums.concat(album)

    res.json(album)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})