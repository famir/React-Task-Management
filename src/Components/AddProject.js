import React, { Component } from 'react';  
import uuid from 'uuid';
import $ from 'jquery';

class AddProject extends Component {

  static defaultProps={
    categories:['Web development','Web Design','Mobile Development','Software Testing','Other']
  }

  constructor (){
    super();
    this.state={
      newProject:{},
      
    }
  }

handleSubmit(e){ 
if(this.refs.title.value==''){
  alert("Title can not be empty!");
}
else{
  this.setState({
    newProject:{
      id:uuid.v4(),
      title:this.refs.title.value,
      category:this.refs.category.value,
      date: this.refs.date.value,
      isDone:false
    }
  },function(){ 

    if (typeof(Storage) !== "undefined") {
      // Code for localStorage/sessionStorage. 
      var newProjectData = $.parseJSON(localStorage.getItem('taskList'));  
       
      if (newProjectData == null){
      newProjectData={};
      }

      newProjectData[this.state.newProject.id.toString()]=this.state.newProject; 


      localStorage.setItem("taskList", JSON.stringify(newProjectData));  
  } else {
   alert("Sorry! No Web Storage support..");
  } 

    this.props.addProject(this.state.newProject);
  })
}

  e.preventDefault();
}

  render() { 
 let categoryOptions=this.props.categories.map(category=>{
   return <option key="{category}" value={category}>{category} </option>
 })
    return (
      <div class="task-container" >
        <h3 class="header-container">Add Task</h3>
        <form class="form-container" onSubmit={this.handleSubmit.bind(this)}> 
          <div>
            <label class="form-text-container"> Title</label>
            <input type="text" ref="title" />
          </div>
          <div style={{lineHeight: 50 + 'px'}}>
            <label class="form-text-container"> Category</label>
            <select ref="category" class="select-container">
            {categoryOptions}
            </select>
          </div>
          <div>
            <label class="form-text-container"> Date</label>
            <input type="date" ref="date" />
          </div>
          <input style={{marginLeft: 85 + 'px'}} type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;
