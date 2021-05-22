const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {

        await mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongoose open for business");

        //schema 
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        //model 
        const Student = mongoose.model("Student", studentSchema);

        //finding by id 
        const result = await Student.findById({ _id: "60a87e4fb45f555af1a46506" });
        console.log(`Name: ${result.name} , Age: ${result.age}`);

    } catch (error) {
        console.log(error);
    }
})();