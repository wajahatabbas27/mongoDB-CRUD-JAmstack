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
            course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
        });

        const courseSchema = new mongoose.Schema({
            courseName: String,
            noOfTopics: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);
        const Course = mongoose.model("Course", courseSchema);

        // This find will return student object will only id of course, if we want to 
        // load related documents then we need to call populate
        //const student = await Student.find({_id: "5f8087bcc936e131c8173ef3" });

        const student = await Student.find({ _id: "60a73a83ecf7a92ed12ce850" }).populate("course");
        console.log("Result: ", student);



    } catch (error) {
        console.log(error);
    }
})();