export interface ProjectDTO {
  id: string;
  name: string;
  previewDescription: string;
  external: string;
  github: string;
}
export class Project {
  id = '';
  name = '';
  previewDescription = '';
  external = '';
  github = '';

  constructor(props: ProjectDTO) {
    Object.assign(this, props);
  }
}