const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


(async () => {
    try {

        await mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('mongoose open for business');

        //Define a schema
        const studentSchema = new mongoose.Schema({
            name: { type: String, index: true },
            age: Number
        });

        //Creating a model
        const Student = mongoose.model('Student', studentSchema);

        // Create an instance of model 'Student'
        const student1 = new Student({
            name: "Inam",
            age: 36
        });
        const student2 = new Student({
            name: "Rehan",
            age: 15
        });
        const student3 = new Student({
            name: "Taha",
            age: 25
        });

        // Save the new model instance
        const result = await Student.insertMany([student1, student2, student3])
        console.log("Result = ", result);
    }
    catch (error) {
        console.log(error);
    }
})();

// (async () => {
//     try {

//         await mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("MondoDb Connected");

//         //schema
//         const studentSchema = new mongoose.Schema({
//             name: { type: String, index: true },
//             age: Number
//         });

//         //model
//         const Student = mongoose.model("Student", studentSchema);

//         //instance 1,2,3
//         const student1 = new Student({
//             name: "a",
//             age: 1
//         });

//         const student2 = new Student({
//             name: "b",
//             age: 11
//         });

//         const student3 = new Student({
//             name: "c",
//             age: 22
//         });

//         //saving data to monodb database 
//         //insert many se bhot sare aik sath create krdega mtlb - create multiple database with it  - lekin array mein dena hai
//         const result = await Student.insertMany([student1, student2, student3]);
//         console.log("Result =", +result);

//     } catch (error) {
//         console.log(error);
//     }
// })();