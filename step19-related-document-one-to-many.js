const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {
        mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongoose connected");

        //schema 
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
        });

        const courseSchema = new mongoose.Schema({
            courseName: String,
            noOfTopics: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);
        const Course = mongoose.model("Course", courseSchema);

        //courses instances 
        const course1 = new Course({
            courseName: "CNC",
            noOfTopics: 11
        });

        const course2 = new Course({
            courseName: "Blockchain",
            noOfTopics: 22
        });

        //saving insatnces 
        const course1SaveResult = await course1.save();
        const course2SaveResult = await course2.save();

        //creating student instance
        const student = new Student({
            name: "Maggi",
            age: 33,
            courses: [course1SaveResult._id, course2SaveResult._id]
        });

        //saving student 
        const studentSaveResult = await student.save();

        console.log("Course 1 save Result: ", course1SaveResult);
        console.log("Course 2 save Result: ", course2SaveResult);
        console.log("Student save Result: ", studentSaveResult);

    } catch (error) {
        console.log(error);
    }
})();