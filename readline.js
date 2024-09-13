const readline = require ("node:readline");
const { stdin: input, stdout: output } =require("node:process");
const fs=require('fs')

const rl = readline.createInterface({input, output});

rl.question ("siapa nama kamu?", (answer)=> {
    rl.question("berapa nomor telpon kamu?",(answer2)=>{
        rl.question("email kamu adalah ?",(answer3)=>{
            console.log(answer+answer2+answer3);
            fs.writeFileSync("test.txt", answer+answer2+answer3);
            rl.close();
            
        })
    })
})      

