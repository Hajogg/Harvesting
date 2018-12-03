
import { firestore } from 'firebase/firestore' 
export class Harvest  {
  constructor(
    public id: string,
    public userId: string,
    public name: string,
    public comment: string,
    public location: string,
    public date: firestore.Timestamp, 
    public jsDate: Date,
    public action: string,
    public isPublic: boolean
  ) { }
}