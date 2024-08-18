class User {
  constructor(
    public email: string,
    public name: string,
    public readonly _id?: string,
  ) { }
}

export default User
