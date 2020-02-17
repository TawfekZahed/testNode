const fs = require('fs')
const path = require('path')
const util = require('util')
const csvtojson = require('csvtojson')
const writeFile = util.promisify(fs.writeFile)
const chalk= require('chalk')

async function test(){
    process.stdin
    .setEncoding('utf-8')
    .on('data', data=>{
        if(data.trim() == "exit")process.exit()

        if(data.trim() == "showall"){
            fs.readFile('user.log',(err,text)=>{
                console.log(chalk.blue(text.toString()))
            })}else{
                fs.appendFile('user.log',data , ()=>{
                    console.log(chalk.green('saved', chalk.blue(data
                        )))
                })
            }
    })
}

test()