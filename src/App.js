import React, { Component } from 'react';
// import logo from './logo.svg';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css'; 
import Projects from './Components/Projects'; 
import AddProject from './Components/AddProject';

class App extends Component {
  
  constructor (){
    super();
    this.state={
      projects:[]
    }
  }
  
  componentWillMount (){ 
    let taskListArray=$.parseJSON(localStorage.getItem('taskList'));
    let listofTask=[];
    $.each(taskListArray, function (key, val) {
      listofTask.push(val);
  });
   
this.setState({
  projects:listofTask}
)

  }
  
handleAddProject(project){
let projects=this.state.projects;
projects.push(project);
this.setState({projects:projects});
}

onUpdate (id){ 
 let projects=this.state.projects;
  let index=projects.findIndex(x=>x.id=== id)
  let taskListArray=$.parseJSON(localStorage.getItem('taskList'));
    
  let selectedTask =projects[index]; 
  projects[index].isDone=true;
  selectedTask.isDone=true; 
  taskListArray[id] = selectedTask;
  localStorage.setItem("taskList", JSON.stringify(taskListArray)); 
  this.setState({projects:projects}); 
}

DeleteAllCompletedTask(){ 
  let projects=this.state.projects;
  
  projects.map(task=>{
    if(task.isDone){ 
      let index=projects.findIndex(x=>x.id=== task.id)
      projects = projects.filter(function(el) {
        return el.id !== task.id;
    });
    }
  })
  this.setState({projects:projects});

  let taskListArray=$.parseJSON(localStorage.getItem('taskList'));
  $.each(taskListArray, function (key, val) {
    if(val.isDone){ 
      delete taskListArray[key];
      localStorage.setItem("taskList", JSON.stringify(taskListArray)); 
    } 
});

}
  render() {
   
    return (
      <div className="App">
        <header className="App-header"> 
          <h1 className="App-title">Task Management</h1> 
        </header>
        <div className="main-body">
        <AddProject  addProject ={this.handleAddProject.bind(this)}/>
        <Projects onUpdate={this.onUpdate.bind(this)} projects={this.state.projects} />
        </div>
        {
          this.state.projects.length !=0 && 
          <button class="button-style" onClick={this.DeleteAllCompletedTask.bind(this)}>Delete all completed task</button>
        }

      </div>
    );
  }
}

export default App;
