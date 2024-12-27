const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const path = require("path");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');


// Middleware to serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "view")));
//console.log(path.join(__dirname, "view"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, 'components'))); // Serve static files from the "public" directory

// Route to serve the main HTML file
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "view", "index.html"));
// });


// Route to serve the main HTML file
// app.get("/ck", (req, res) => {
//     res.sendFile(path.join(__dirname, "view", "index1.html"));
// });

// // Route to serve the add user HTML file
// app.get("/adduser", (req, res) => {
//     res.sendFile(path.join(__dirname, "view", "addUser.html"));
// });

//http://localhost:3003/api-docs/#/default/post_api_users -- to see on swagger

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
//app.use('/api/users', userRoutes);

app.post('/api/users', userRoutes);
app.get('/api/get/users', userRoutes);

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
  //  console.log('Request headers:', req.headers);
  //  console.log('Request body:', req.body);
    next();
});





app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;
