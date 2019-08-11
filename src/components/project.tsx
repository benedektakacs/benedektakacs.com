import * as React from 'react';
import { normalizeText } from '../utils';

interface ProjectInterface {
  title: string;
  description: string;
  images: string[];
}

export const Project = ({ title, description, images }: ProjectInterface) => (
  <div className="project" id={"project_" + normalizeText(title)}>
    {images.map(x => <img src={x} />)}<br />
    {title} {description}
  </div>
);
