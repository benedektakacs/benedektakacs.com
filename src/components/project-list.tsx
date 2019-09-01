import * as React from 'react';
import { Project as ProjectComponent } from "./project";
import { Project } from '../interface';

interface ProjectListInterface {
  projects: Project[];
  projectsOrder: string[];
}

export const ProjectList = ({ projects, projectsOrder }: ProjectListInterface) => {
  projects = [ ...projects ].sort(sortByOrderId(projectsOrder));

  return (
    <div className="project_list">
      {projects.map(x => <ProjectComponent {...x}></ProjectComponent>)}
    </div>
  );
};

function sortByOrderId(order: string[]) {
  return (x: Project, y: Project) => {
    if(y.orderId === null) {
      return -1;
    }

    if(x.orderId === null){
      return 1;
    }

    
    const xIndex = order.indexOf(x.orderId);
    const yIndex = order.indexOf(y.orderId);

    return xIndex > yIndex ? 1 : -1;
  }
};
