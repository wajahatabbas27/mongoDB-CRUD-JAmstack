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

        //finding a number by its field - mtlb object ke andar jo hoga usse 
        //const result = await Student.find({ name: "wajahat" });            //finding by name 
        const result = await Student.find({ age: 19 });                        //finding by age 

        result.forEach((item) => {
            console.log(`name is ${item.name} , age is ${item.age}`);
        })


    } catch (error) {
        console.log(error);
    }
})();