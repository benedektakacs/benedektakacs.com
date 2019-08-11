import * as React from 'react';

interface ProjectInterface {
  title: string;
  description: string;
  images: string[];
}

export const Project = ({ title, description, images }: ProjectInterface) => (
  <div className="project">
    {images.map(x => <img src={x} />)}<br />
    {title} {description}
  </div>
);
