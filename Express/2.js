import http from "http" //in built module from nodejs
import url from "url"
const port=8004 //port number
import fs from "fs/promises"
async function main(){

    let httpServer=http.createServer(async(req,res)=>{
        let read = await fs.readFile("package.json","utf-8")
        console.log(req) // browser http data
        res.end(read)
    });
    httpServer.listen(port,(req,res)=>{
        console.log(`Server Listening At Port Number ${port}`)
    })
}
main()