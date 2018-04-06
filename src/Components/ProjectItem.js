import React, { Component } from 'react'; 


class ProjectItem extends Component {


    updateTask(id){ 
this.props.onUpdate(id)
    }
  render() { 
    return (
      <tr className="Projects">
          <td><strong>{this.props.project.title}</strong></td>  <td> {this.props.project.category}</td>  <td title="yyyy-mm-dd"> {this.props.project.date}</td>   <td><button class="button-style" disabled = {this.props.project.isDone} onClick={this.updateTask.bind(this,this.props.project.id)}> {this.props.project.isDone ? 'Task Completed' : 'Done'}  </button></td>
      </tr>
    );
  }
}

export default ProjectItem;
