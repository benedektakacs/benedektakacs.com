import * as React from 'react';
import { graphql } from 'gatsby';
import { Menu } from '../components/menu';
import { PersonalInfo } from '../components/personal-info';
import { ProjectList } from '../components/project-list';
import { Project } from '../interface';

interface HomeInterface {
  data: {
    allProjectsJson: {
      edges: { node: Project }[];
    }
  },
}

export const Home = ({ data }: HomeInterface) => {
  const projects = data.allProjectsJson.edges.map(x => x.node);
  
  return (
    <>
      <Menu projects={projects}></Menu>
      <ProjectList projects={projects}></ProjectList>
      <PersonalInfo></PersonalInfo>
    </>
  );
};

export default Home;

export const query = graphql`
  query HomeQuery {
    allProjectsJson {
      edges {
        node {
          title
          description
          images
        }
      }
    }
  }
`
