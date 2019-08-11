import * as React from 'react';
import { Project } from '../interface';
import { normalizeText } from '../utils';

const ABC = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';

interface MenuInterface {
  projects: Project[];
}

import './menu.scss';

export const Menu = ({ projects }: MenuInterface) => {
  const abcMenu = ABC.split('').map(x => <Letter letter={x} projects={projects}></Letter>);
  return <ul>{abcMenu}</ul>;
};

const Letter = ({ letter, projects }: { letter: string, projects: Project[] }): any => {
  const titles = projects.map(x => x.title).filter(title => title[0] === letter);

  if(titles.length > 0){
    return titles.map(x => <li><a href={"#"+ normalizeText(x)}>{x}</a></li>);
  }

  return <li>{letter}</li>;
}
