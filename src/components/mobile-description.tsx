import * as React from 'react';

interface MobileDescriptionProperties {
  title: string;
  description: string;
  showDescription: boolean;
}

import './mobile-description.scss';

export const MobileDescription = ({ title, description, showDescription }: MobileDescriptionProperties) => {
  return (
    <div className={'mobile-description' + (showDescription ? ' mobile-description--show' : '')}>
      <div className="mobile-description__title"><span>{"<"}</span> {title}</div><br />
      <div className="mobile-description__content">{description}</div>
    </div>
  );
}
