import * as React from 'react';

interface MobileDescriptionProperties {
  title: string;
  description: string;
  showDescription: boolean;
  goBack: Function;
}

import './mobile-description.scss';

export const MobileDescription = ({ title, description, showDescription, goBack }: MobileDescriptionProperties) => {
  return (
    <div className={'mobile-description' + (showDescription ? ' mobile-description--show' : '')}>
      <div className="mobile-description__title">
        <div onClick={() => goBack()}>Back</div><br />
        <div>{title}</div><br />  
      </div>
      <div className="mobile-description__content">{description}</div>
    </div>
  );
}
