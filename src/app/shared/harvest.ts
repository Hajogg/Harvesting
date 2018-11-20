export class Harvest  {
  constructor(
    public id: string,
    public userId: string,
    public name: string,
    public comment: string,
    public location: string,
    public date: Date,
    public action: string,
    public isPublic: boolean
  ) { }
}