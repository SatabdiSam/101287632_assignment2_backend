const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
app.get('/employees', async (req, res) => {
  const employees = await employeeModel.find({});

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Create New Record
/*
    //Sample Input as JSON
    //application/json as Body
    {
      
    "Id":  "1",
    "firstName": "Satabdi",
    "lastName": "Sangma",
    "emailId": "Satabdi.Sangma@georgebrown.ca"  
    
*/

app.post('/employee', async (req, res) => {
    const employee = new employeeModel(req.body);
  
    try {
      await employee.save();
      res.send(employee);
    } catch (err) {
      res.status(500).send(err);
    }
  });

//Retrieve a single Employee ID
app.get('/employee/:Id', async (req, res) => {
    // Write your code here to return onlt one note using noteid
    try {
        const notesId = await noteModel.findById(req.params.noteId)
        res.send(notesId)
    } catch(err) {
        console.log("ERROR: " + err)
        res.status(500).send(err)
    }
});

//Update Record
app.patch('/employee/:Id', async (req, res) => {
    try {
      await employeeModel.findByIdAndUpdate(req.params.id, req.body)
      await employeeModel.save()
      res.send(employee)
    } catch (err) {
      res.status(500).send(err)
    }
  });

//Delete Record
app.delete('/employee/:Id', async (req, res) => {
    try {
      const employee = await employeeModel.findByIdAndDelete(req.params.id)
  
      if (!employee) res.status(404).send("No item found")
      res.status(200).send()
    } catch (err) {
      res.status(500).send(err)
    }
  });

module.exports = app