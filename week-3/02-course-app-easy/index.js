const express = require('express');
const app = express();
const bodyParser=require("body-parser");
app.use(bodyParser.json());

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
let username=req.body.username;
let password=req.body.password;
for(let i=0;i<ADMINS.length;i++){
  if(username===ADMINS[i].username && password===ADMINS[i].password){
    res.status(403).send("Admin already exists");
  }
}
ADMINS.push({username:username,
password:password});
res.status(201).send("Admin created successfully")
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
  // let username=req.headers.username;
  // let password=req.headers.password;
  let {username,password}=req.headers;
  let isPresent=ADMINS.find(a=>a.username===username && a.password===password);

});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
