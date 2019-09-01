import * as React from 'react';
import { normalizeText } from '../utils';
import { ProjectImage } from '../interface';
import { MobileDescription } from './mobile-description';

interface ProjectInterface {
  title: string;
  description: string;
  images: ProjectImage[][];
}

import "./project.scss";

export const Project = ({ title, description, images }: ProjectInterface) => {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <div className="project" id={normalizeText(title)}>
      <MobileDescription
        title={title}
        description={description}
        showDescription={showDescription}
        goBack={() => setShowDescription(false)}>
      </MobileDescription>
      <Images images={images} />
      <span className="title" onClick={() => setShowDescription(!showDescription)}>{title}</span> <span className="description" dangerouslySetInnerHTML={{ __html: description }}></span>
    </div>
  )
};

const Images = ({ images }: { images: ProjectImage[][] }) => {
  return images.map(row => <ImageRow images={row} />);
}

const ImageRow = ({ images }: { images: ProjectImage[] }) => {
  if(images.length === 1) {
    return (
      <div className="images images--single">
        <Image image={images[0]} />
      </div>
    );
  } else {
    return (
      <div className="images images--multiple">
        {images.map(x => <Image image={x} />)}
      </div>
    )
  }
}

function Image({ image }: { image: ProjectImage }) {
  return (
    <div>
      <img src={require("../data/images/"+ image.filename)} />
      <div className="caption">{image.caption}</div>
    </div>
  )
}
