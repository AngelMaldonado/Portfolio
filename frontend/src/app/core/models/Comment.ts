import Post from "./Post"
import User from "./User"

class Comment {
  constructor(
    public stars: number = 0,
    public comment: string,
    public post: Post,
    public user: User,
    public readonly _id?: string
  ) { }
}

export default Comment
