const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {
        mongoose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log("Mongoose connected");

        //schema
        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number
        });

        //model
        const Student = mongoose.model("Student", studentSchema);

        //replacing document using - replaceOne
        const result = await Student.replaceOne({ _id: "60a73b4f7207b7307d133993" }, { name: "Abbas Askari" });
        console.log("Result: ", result);

    } catch (error) {
        console.log(Error);
    }
})();