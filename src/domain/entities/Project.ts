export interface ProjectDTO {
  id: string;
  name: string;
  previewDescription: string;
  description: string;
  external: string;
  github: string;
}
export class Project {
  id = '';
  name = '';
  previewDescription = '';
  description = '';
  external = '';
  github = '';

  constructor(props: ProjectDTO) {
    Object.assign(this, props);
  }
}
