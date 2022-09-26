//const http =require('http')
//http.createServer(req,res=>{
//res.end('hello world')
//}).listen(3000)
const express = require('express');
const app = express()

app.use(express.json())

const students = [];

app.get('/greet', (req, res) => {
  res.send("welcome...");
});
app.get('/', (req, res) => {
  res.send("reponse from root");
});

app.get('/help', (req, res) => {
  res.send("what is html?");
});

//read the student record.......
app.get('/students',(req,res) =>{
  try{
    res.send(students)
}catch(error){
  res.send(error)
}
});

//create a student record post
app.post('/students', (req, res) => {
  try {
    const student = req.body;
    students.push(student);
    res.send(students)
  } catch (error) {
    res.send(error)
  }
});
//read at student record with id
app.get('/students/:id', (req, res) => {
  try{
const student=students.find((student) =>student.id==req.params.id)
res.send(student)
  }catch(error){
    res.send(error)
  }
})



//update student record
app.put('/students/:id', (req, res) => {
  try {
  const id=req.params.id;
  const index= students.findIndex(student =>student.id==id)
  students[index]=req.body;
  res.send(students);
  }catch(error){
   res.send(error)
  }

})
 //delete student record....................
 app.delete('/students/:id', (req, res) => {
  try {
  const id=req.params.id;
  const index= students.findIndex(student =>student.id==id)
  students.splice(index);
  res.send("deleted");
  }catch(error){
   res.send(error)
  }

})







app.listen(1411, () => {
  console.log("server is running on port");
});

 //'id'=1,
 //'name'='abc',
 //'branch'='ece'
