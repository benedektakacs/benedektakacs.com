import * as React from 'react';
import { graphql } from 'gatsby';
import { Project, SiteInfo } from '../interface';
import { App } from '../components/app';

interface HomeInterface {
  data: {
    allProjectsJson: {
      edges: { node: Project }[];
    },
    dataJson: SiteInfo
  },
}

export const Home = ({ data }: HomeInterface) => {
  const projects = data.allProjectsJson.edges.map(x => x.node);
  
  return <App projects={projects} siteInfo={data.dataJson}></App>;
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allProjectsJson {
      edges {
        node {
          title
          description
          images {
            caption
            filename
          }
        }
      }
    }
    dataJson {
      siteTitle
      siteMetaDescription
      siteSocialImage
      order
    }
  }
`
