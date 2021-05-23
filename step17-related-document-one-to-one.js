const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {

        mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Mongoose connected");

        //schema
        //student schema
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }               //course bhi ismein hai lekin iska schema alag bnega isko relate krrhe hain hm 
        });

        //course schema
        const courseSchema = new mongoose.Schema({
            courseName: String,
            noOfTopics: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);
        const Course = mongoose.model("Course", courseSchema);

        //instances of course 
        const course = new Course({
            courseName: "AI",
            noOfTopics: 5
        });

        //saving course instance
        const courseSaveResult = await course.save();

        //student instance
        const student = new Student({
            name: "Mehdi ",
            age: 14,
            course: courseSaveResult._id                 //  ._id se call krrhe hain course ko hm student mein.
        });

        const studentSaveResult = await student.save();

        console.log("Course save Result: ", courseSaveResult);
        console.log("Student save Result: ", studentSaveResult);

    } catch (error) {
        console.log(error);
    }
})();