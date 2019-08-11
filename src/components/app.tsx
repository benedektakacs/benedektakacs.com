import * as React from 'react';
import { Menu } from './menu';
import { PersonalInfo } from './personal-info';
import { ProjectList } from './project-list';
import { Project } from '../interface';

interface AppInterface {
  projects: Project[];
}

import "./app.scss";
export const App = ({ projects }: AppInterface) => (
  <div className="page">
    <Menu projects={projects}></Menu>
    <ProjectList projects={projects}></ProjectList>
    <PersonalInfo></PersonalInfo>
  </div>
);
