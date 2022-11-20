import express from 'express';
import { People , Grade , Task } from './types/generalType';
import morgan from 'morgan';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

let people: People[] = [];
let grade: Grade[] = [];
let task: Task[] = [];

// People --------------------------

app.get('/name', (req, res) => {
    return res.json(people);
  });
  
  app.post('/name', (req, res) => {
    let newName = req.body as People;
    people.push(newName);
    return res.json({
      message: 'Name created:)'
    });
  });
  
  app.put('/name/:id', (req, res) => {
    let updated = req.body as People;
    let pID = req.params.id;
    for (let i=0; i<people.length; i++){
      if(people[i].id == pID){
        people[i]=updated
      }
    }
    return res.json({
      message: 'Name updated :)',
    });
  });
  
  app.delete('/name/:id', (req, res) => {
    const pID = req.params.id;
    for (let i=0; i<people.length; i++){
      if(people[i].id==pID){
        people.splice(i, 1);
      }
    }
    return res.json({
      message: 'Name deleted :)'
    })
  });
  
  // Grade ---------------------------

  app.get('/grades', (req, res) => {
    return res.json(grade);
  });
  
  app.post('/grades', (req, res) => {
    let newGrade = req.body as Grade;
    grade.push(newGrade);
    return res.json({
      message: 'Grade added :)'
    });
  });
  
  app.put('/grades/:id', (req, res) => {
    let updated = req.body as Grade;
    let gID = req.params.id;
    for (let i=0; i<grade.length; i++){
      if(grade[i].id == gID){
        grade[i]=updated
      }
    }
    return res.json({
      message: 'Grade updated :)',
    });
  });
  
  app.delete('/grade/:id', (req, res) => {
    const gID = req.params.id;
    for (let i=0; i<grade.length; i++){
      if(grade[i].id==gID){
        grade.splice(i, 1);
      }
    }
    return res.json({
      message: 'Grade deleted :)'
    })
  });
  


// Task-----------------------------------------
  app.get('/tasks', (req, res) => {
    return res.json(task);
  });
  
  app.post('/tasks', (req, res) => {
    let newTask = req.body as Task;
    task.push(newTask);
    return res.json({
      message: 'Task added :)'
    });
  });
  
  app.put('/tasks/:id', (req, res) => {
    let updated = req.body as Task;
    let tID = req.params.id;
    for (let i=0; i<task.length; i++){
      if(task[i].id == tID){
        task[i]=updated
      }
    }
    return res.json({
      message: 'Task updated :)',
    });
  });
  
  app.delete('/tasks/:id', (req, res) => {
    const tID = req.params.id;
    for (let i=0; i<task.length; i++){
      if(task[i].id==tID){
        task.splice(i, 1);
      }
    }
    return res.json({
      message: 'Task deleted :)'
    })
  });
  
  
  app.put('/tasks/:id/:status', (req, res) => {
    const tID = req.params.id;
    const status = req.params.status;
    for (let i=0; i<task.length; i++){
      if(task[i].id == tID){
        if (status == "true"){
           task[i].status = "done";
        } else if (status == "false"){
           task[i].status = "not ready";
        }
      }
    }
    return res.json({
      message: 'Task updated :)'
    });
  });
  
  // Search ------------------------------------------
  app.get('/tasks/:title', (req, res) => {
    let str = req.params.title;
    let title = str.replace("-"," ");
    let searchArr = task.filter((item)=>{
      return item.title.toLowerCase().includes(title);
    })
    return res.json(searchArr);
  });






app.listen(5000, () => {
  console.log('Server is running in number port ' + 5000);
});