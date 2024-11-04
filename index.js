import "dotenv/config";
import * as cowsay from "cowsay"

let output= cowsay.say({ text: `Hello I'm ${process.env.NAME}, from ${process.env.CAMPUS}!` });

console.log(output);