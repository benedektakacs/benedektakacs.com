import * as React from 'react';
import { Menu } from './menu';
import { PersonalInfo } from './personal-info';
import { ProjectList } from './project-list';
import { Helmet,  } from "react-helmet"
import { Project, SiteInfo } from '../interface';

interface AppInterface {
  projects: Project[];
  siteInfo: SiteInfo;
}

import "./app.scss";
export const App = ({ projects, siteInfo }: AppInterface) => (
  <div className="page">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={siteInfo.siteMetaDescription}></meta>
      <meta name="keywords" content={siteInfo.siteKeywords}></meta>
      <meta name="author" content={siteInfo.siteAuthor}></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>{siteInfo.siteTitle}</title>
    </Helmet>
    <Menu projects={projects}></Menu>
    <ProjectList projects={projects}></ProjectList>
    <PersonalInfo></PersonalInfo>
  </div>
);
