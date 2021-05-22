const mongooose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

(async () => {
    try {

        await mongooose.connect("mongodb+srv://WajahatAZ:Abihawajahat1!@jamstackcrudmongodb.2qgx1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("mongoose open for business");

        //schema 
        //name ke aage hm index bta rhe hain yhn pe
        const studentSchema = new mongooose.Schema({
            name: { type: String, index: true },
            age: Number
        });

        //model 
        const Student = mongooose.model('Student', studentSchema);

        //instance yani- value derhe hain schema ko hm jo bnaya hai hmne phr isko save kreinge 
        const student1 = new Student({
            name: "Askari",
            age: 19,
        });

        //create second instance
        const student2 = new Student({
            name: "Ali",
            age: 9,
        })

        //save the new model instance
        const result1 = await student1.save();
        const result2 = await student2.save();
        console.log("Result: " + result1);
        console.log("Result: " + result2);


    } catch (error) {
        console.log(error);
    }
})();