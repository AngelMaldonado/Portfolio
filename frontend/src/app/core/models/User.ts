class User {
  constructor(
    public email: string,
    public name: string,
    public token?: string,
    public pswd?: string,
    public repswd?: string,
    public comments?: Comment[],
    public createdAt?: Date,
    public readonly _id?: string,
  ) { }
}

export default User
