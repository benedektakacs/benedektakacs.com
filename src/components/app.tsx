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
      <meta name="description" content={siteInfo.siteMetaDescription} />
      <meta name="keywords" content={siteInfo.siteKeywords} />
      <meta name="author" content={siteInfo.siteAuthor} />
      <meta property="og:title" content={siteInfo.siteTitle} />
      <meta property="og:description" content={siteInfo.siteMetaDescription} />
      <meta property="og:image" content={siteInfo.siteSocialImage} />
      <title>{siteInfo.siteTitle}</title>
    </Helmet>
    <Menu projects={projects}></Menu>
    <ProjectList projects={projects}></ProjectList>
    <PersonalInfo></PersonalInfo>
  </div>
);
