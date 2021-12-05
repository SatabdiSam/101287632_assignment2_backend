let mongoose = require('mongoose')


const EmployeeSchema = new mongoose.Schema({
    ID: {
        type: Number,
        default: 00,
        validate(v) {
            if(v < 0) throw new Error("ID cannot be negative")
        },

    firstName: {type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    emailId: {
        type: String,
        lowercase: true,
        uppercase: true,
        Number: true,
        syntax: true
    }

}
})

const Employee = mongoose.model("employee", EmployeeSchema)
module.exports = Employee;