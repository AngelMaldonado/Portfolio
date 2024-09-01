class Post {
  constructor(
    public slug: string,
    public title: string,
    public abstract: string,
    public imageUrl: string,
    public markdownUrl: string,
    public updatedAt?: Date,
    public stars: number[] = [],
    public starsAvg: number = 0,
    public readonly _id?: string
  ) { }
}

export default Post
