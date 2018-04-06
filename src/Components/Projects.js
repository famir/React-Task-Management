import React, { Component } from 'react'; 
import ProjectItem from './ProjectItem';


class Projects extends Component {

    onUpdate(id){ 
this.props.onUpdate(id);
    }


  render() { 

    let projectItems;

    if(this.props.projects){
        projectItems=this.props.projects.map(project=> { 
            return (
                <ProjectItem onUpdate={this.props.onUpdate.bind(this)} key={project.id} project={project} />
                   )
        })
    }

    return (
      <div className="task-container" style={{marginTop: 20 + 'px',border:'none'}}>
       <h3 style={{textAlign: 'left'}}>Task List</h3> 
       <table>
  <tr>
    <th>Title</th>
    <th>Category</th> 
    <th>Date</th>
    <th>Status</th>
  </tr>
  
        {projectItems}

        </table>
      </div>
    );
  }
}

export default Projects;
