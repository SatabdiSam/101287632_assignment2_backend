let express = require("express")
let mongoose = require("mongoose")
const employeeRouter = require('./routes/EmployeeRoutes.js');

let app = express()

mongoose.connect('mongodb+srv://ssangma:BTShoe123456@assignment2.q7www.mongodb.net/101287632_assignment2?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.get('/', (req, res) => {
    res.send("<h1>Assignment 2</h1>");
});

//Instert new Employee
app.get('/add', (req, res) => {
    res.send("<h1>Assignment 2</h1>");
});

app.listen(9090, () => {
    console.log("Server running on http://localhost:9090/");

})