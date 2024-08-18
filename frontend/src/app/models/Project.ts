class Project {
  constructor(
    public startDate: Date,
    public endDate: Date,
    public title: string,
    public description: string,
    public projectUrl: string,
    public image: string,
    public repoUrl?: string,
    public readonly _id?: string
  ) { }
}

export default Project
