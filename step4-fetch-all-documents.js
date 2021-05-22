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

        //find-- method to fetch all documents
        //Is tarhan hm find krleinge mtlb - data uthake leaega yh hmare pass 
        const result = await Student.find({});

        //kionke bhot sare documents hain isliye forEach lgarhe hain 
        result.forEach((item) => {
            console.log("name is :" + item.name + "  age is :" + item.age);
            //console.log(`Name: ${item.name} , Age: ${item.age}`)
        })

    } catch (error) {
        console.log(error);
    }
})();