import * as React from 'react';
import { Project as ProjectComponent } from "./project";
import { Project } from '../interface';

interface ProjectListInterface {
  projects: Project[];
  projectsOrder: string[];
}

export const ProjectList = ({ projects, projectsOrder }: ProjectListInterface) => {
  const ordered = projects.sort(sortByOrderId(projectsOrder));

  return (
    <div className="project_list">
      {ordered.map(x => <ProjectComponent {...x}></ProjectComponent>)}
    </div>
  );
};

function sortByOrderId(order: string[]) {
  return (x: Project, y: Project) => {
    const xIndex = order.indexOf(x.orderId);
    const yIndex = order.indexOf(y.orderId);
    
    console.log(xIndex, yIndex);

    if(xIndex === -1 && yIndex === -1) {
      return -1;
    }

    return xIndex !== -1 && xIndex < yIndex ? -1 : 1;
  }
};
