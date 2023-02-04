# Taylor Swift Albums API 🎵 🪕

![Taylor Swift Albums API Demo](https://user-images.githubusercontent.com/57073322/216782366-46b9db23-0f95-4292-8d86-df5de9b97e7b.png)

This simple API allows you to perform basic CRUD operations on a list of Taylor Swift albums. 

**Tech used:** <img src="https://img.shields.io/badge/-JavaScript-B4E582?logo=javascript&logoColor=F7DF1E&style=flat&labelColor=454545"> <img src="https://img.shields.io/badge/-Express-B4E582?logo=express&logoColor=F7DF1E&style=flat&labelColor=454545"> <img src="https://img.shields.io/badge/-Node.js-B4E582?logo=nodedotjs&logoColor=F7DF1E&style=flat&labelColor=454545">

Try it! Test functionality in <a href="https://www.postman.com/">Postman</a> using <a href="https://taylorswiftalbumsapi.cyclic.app/api/albums">this URL.</a>

# Documentation

## Endpoints
* GET /api/albums: returns a list of all the albums in the database
* GET /api/albums/id: returns the details of an album with a given id
* DELETE /api/albums/id: deletes an album with a given id
* POST /api/albums: creates a new album

## Request Body

For the POST /api/albums endpoint, the request body should include albumname and year fields. The albumname field must be unique.

## Error Responses

* 400 Bad Request: when the request body is missing either the albumname or year field
* 409 Conflict: when the albumname field is not unique

## Running the API

1. Clone the repository
2. Run npm install to install the required dependencies
3. Run npm start to start the API server

The API will be running on http://localhost:3001 by default.
