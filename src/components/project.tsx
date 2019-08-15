import * as React from 'react';
import { normalizeText } from '../utils';
import { ProjectImage } from '../interface';

interface ProjectInterface {
  title: string;
  description: string;
  images: string[];
}

import "./project.scss";
import { MobileDescription } from './mobile-description';

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
      <span className="title" onClick={() => setShowDescription(!showDescription)}>{title}</span> <span className="description">{description}</span>
    </div>
  )
};

const Images = ({ images }: { images: ProjectImage[][] }) => {
  return images.map(row => <ImageBlock images={row}></ImageBlock>);
}

const ImageBlock = ({ images }: { images: ProjectImage[] }): React.ReactNode => {
  return chunk(images, 2).map(x => <ImageRow images={x}></ImageRow>) as any;
}

const ImageRow = ({ images }: { images: [ProjectImage] | [ProjectImage, ProjectImage] }) => {
  const aImage = images[0];
  const bImage = images[1];
  if(!bImage) {
    return (
      <div className="images images--one">
        <div>
          <img src={require("../data/images/"+ aImage.filename)} />
          <div className="caption">{aImage.caption}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="images images--two">
        <div>
          <img src={require("../data/images/"+ aImage.filename)} />
          <div className="caption">{aImage.caption}</div>
        </div>
        <div>
          <img src={require("../data/images/"+ bImage.filename)} />
          <div className="caption">{bImage.caption}</div>
        </div>
      </div>
    )
  }
}

function chunk<T>(array: T[], chunkSize: number) {
  var R = [];
  for (var i = 0; i < array.length; i += chunkSize)
    R.push(array.slice(i, i + chunkSize));
  return R;
}