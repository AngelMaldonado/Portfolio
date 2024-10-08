class User {
  constructor(
    public email: string,
    public name: string,
    public pswd?: string,
    public comments?: Comment[],
    public createdAt?: Date,
    public readonly _id?: string,
  ) { }
}

export default User
