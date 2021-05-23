const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {
        await mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongoose connected");

        //schema
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);

        //instance finding one element to update 
        //finding Element
        const result = await Student.findOne({ name: "Inam" });
        console.log(`Id is ${result.id} , Name is ${result.name} , Age is ${result.age}`);

        //updating name 
        result.name = "AZ";

        // saving update name
        const updateResult = await result.save();
        console.log("Update Result : ", updateResult);

    } catch (error) {
        console.log(error);
    }
})();