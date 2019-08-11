import * as React from 'react';
import { Project as ProjectComponent } from "./project";
import { Project } from '../interface';

interface ProjectListInterface {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListInterface) => (
  <div className="project_list">
    {projects.map(x => <ProjectComponent {...x}></ProjectComponent>)}
  </div>
);
