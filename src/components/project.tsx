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
    <Images images={images} />
    <span className="title">{title}</span> <span className="description">{description}</span>
  </div>
);

const Images = ({ images }: { images: string[] }) => {
  const imagesSrc = images.map(x => require("../data/images/"+ x));

  const nodes = [];

  while(imagesSrc.length > 0) {
    const a = imagesSrc.shift();
    const b = imagesSrc.shift();

    nodes.push(<ImageRow aImage={a} bImage={b}></ImageRow>);
  }

  return nodes as any;
}

const ImageRow = ({ aImage, bImage }: { aImage: string, bImage?: string}) => {
  if(!bImage) {
    return (
      <div className="images images--one">
        <div>
          <img src={aImage} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="images images--two">
        <div>
          <img src={aImage} />
        </div>
        <div>
          <img src={bImage} />
        </div>
      </div>
    )
  }
}
