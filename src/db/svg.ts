// import { mongoose } from "mongoose";
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test2");
mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", function () {
    console.log("mongodb connected");
});

let svgSchema = mongoose.Schema({
    id:   Number,
    name: String,
    body: String
});
svgSchema.methods.print = function() {
    console.log(this.body);
};

export default mongoose.model("svg", svgSchema);

// let svg1 = new svg({
//     id: 1,
//     name: "svg1",
//     body: "<svg></svg>"
// })

// svg1.print();
// svg1.save(function (err, obj) {
//     if (err) return console.log(err);
//     obj.print();
// })

// let query = svg.find({ });
// let promise = query.exec();
// promise.then(function (docs) {
//     console.log(docs);
// }, function (err) {
//     console.log(err);
// });