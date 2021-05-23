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
            courseName: "maths",
            noOfTopics: 1455
        });

        const course2 = new Course({
            courseName: "eng",
            noOfTopics: 22576
        });

        //saving instances 
        const course1SaveResult = await course1.save();
        const course2SaveResult = await course2.save();

        //student ko updateone se update krrhe hain aur push se courses add krrhe hain usmein
        const studentResult = await Student.updateOne({ _id: "60a73a83ecf7a92ed12ce850" },
            {
                $push: {                                                          //is id mein push krrhe hain hm yh courses. 
                    courses: [course1SaveResult, course2SaveResult]
                }
            });

        console.log("Student save Result: ", studentResult);


    } catch (error) {
        console.log(error);
    }
})();



//3 techniques hain relate krne ki,
//1- phli courses define krdeinge schema mein
//2-find kreinge id se phr populate krdeinge courses 
//3- id call krke push krdeinge 