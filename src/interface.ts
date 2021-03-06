export interface Project {
  title: string;
  description: string;
  images: ProjectImage[][];
  orderId?: string;
}

export interface ProjectImage {
  filename: string;
  caption?: string;
}

export interface SiteInfo {
  siteTitle: string;
  siteKeywords: string;
  siteAuthor: string;
  siteMetaDescription: string;
  siteSocialImage: string;
  order: string[];
}
