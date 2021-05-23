const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {
        await mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongoose connected");

        //schema 
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);

        //finding single document from - findOne
        const result = await Student.findOne({ name: "Inam" });
        console.log(`Name: ${result.name} , Age: ${result.age}`);

    } catch (error) {
        console.log(error);
    }
})();