export interface Project {
  title: string;
  description: string;
  images: ProjectImage[][];
}

export interface ProjectImage {
  filename: string;
  caption?: string;
}
