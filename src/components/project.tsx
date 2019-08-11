import * as React from 'react';
import { normalizeText } from '../utils';

interface ProjectInterface {
  title: string;
  description: string;
  images: string[];
}

import "./project.scss";

export const Project = ({ title, description, images }: ProjectInterface) => (
  <div className="project" id={normalizeText(title)}>
    {images.map(x => <img src={x} />)}<br />
    <span className="title">{title}</span> <span className="description">{description}</span>
  </div>
);
