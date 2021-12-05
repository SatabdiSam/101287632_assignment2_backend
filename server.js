const express = require('express');

const mongoose = require('mongoose');

const employeeRouter = require('./routes/EmployeeRoutes.js')

const cors = require("cors");

const app = express();

app.use(cors());

const port = process.env.PORT || 9090;

app.use(express.json());

mongoose.connect('mongodb+srv://ssangma:BTShoe123456@assignment2.q7www.mongodb.net/101287632_assignment2?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

app.use(employeeRouter);

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);

});