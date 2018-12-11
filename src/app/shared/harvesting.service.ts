import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MomentModule } from 'angular2-moment';
import { Harvest } from './harvest';
import { Action } from '../domain/action';
import { HarvestFactory } from './harvest-factory';
import * as moment  from 'angular2-moment';
import { Router } from '@angular/router';
import { firestore } from 'firebase/firestore' 

@Injectable()
export class HarvestingService {
  public harvestItems: AngularFirestoreCollection<Harvest>;
  items: Observable<Harvest[]>;
  public actionItems:AngularFirestoreCollection<Action>;
  public displayName: string;
  public email: string;
  readonly path = 'harvestItems';
  private headers: Headers = new Headers();
  constructor(
    public afAuth: AngularFireAuth, 
    private afs: AngularFirestore,
    public router: Router) {
    this.harvestItems = this.loadFirebaseItems();
    this.items = this.harvestItems.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Harvest;
        const id = action.payload.doc.id;
        console.log('>>>>', { id, ...data });
        data.id = id;  
        let date = data.date as firebase.firestore.Timestamp;
        data.date = date;
        data.jsDate = date.toDate();
        return { ...data };
      });
    });
    
    this.actionItems =  this.afs.collection<Action>('actions'); 
    
   }
    loginWithGoogle() {
    return  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  loginWithFacebook() {
    return  this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
  /**
   * Logs out the current user
   */
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/home');
    //this.clear(); 
  }
  // create(text) {
  //   var item = {
  //     name: text,
  //     displayName: this.displayName,
  //     comment: text,
  //     date: Date.now()
  //   };
  //   this.harvestItems.push(item);
  // }
 loadFirebaseItems(): AngularFirestoreCollection<Harvest>
 {
   var uid= localStorage.getItem('uid');
   return   this.afs.collection<Harvest>('harvestItems'); //,ref => ref.orderByChild('userId').equalTo(localStorage.getItem('uid')));
      // query: {
      //   orderByChild: 'userId',)
      //   //equalTo:{value: 'l89U0KWEeYPac5HqlF69bKwIofe2', key: 'userId'}

      //   equalTo: localStorage.getItem('uid') //'l89U0KWEeYPac5HqlF69bKwIofe2'
        
        
      // }
    //});
 }
//  loadFirebaseItems(): FirebaseListObservable<any>
//  {
//     return  this.db.list('harvestItems');
//  }
 getAll(): Observable<Array<Harvest>> {
   var harvests =  this.harvestItems.snapshotChanges().map(actions => {
    return actions.map(action => {
      const data = action.payload.doc.data() as Harvest;
      const id = action.payload.doc.id;
      console.log('>>>>', { id, ...data });
      data.id = id;  
      let date = data.date as firebase.firestore.Timestamp;
      data.date = date;
      data.jsDate = date.toDate();
      return { ...data };
    });
  });
      //.map(response => response.json())
      //.map(rawHarvests => rawHarvests.filter(p=>p.userId == localStorage.getItem('uid')))
      // .map(rawHarvests => 
      
      // {
      //   var result = rawHarvests
      //   .map(rawHarvest => HarvestFactory.fromObject(rawHarvest));
      //   return result;
      // }
      // )
      // .map((array) => array.reverse()); //.catch(this.errorHandler);
      // change order 
      return harvests; //.filter(p=>p.userId==localStorage.getItem('uid'));
  }

  getSingle(id: string): Observable<Harvest> {
    var result: Observable<Harvest>;
    var url : string;
    url = 'harvestItems/' + id;
    var rawHarvest =  this.afs.doc(url);
    // rawHarvest.subscribe(
    //    val => {    
    //     result = val;
    //   });
    //   return rawHarvest;
    // af.database.object(`/lists/${m.$key}`).subscribe(
    //   val => {    
    //     m.shapes = val;
    //   });
    // return rawHarvest.map()
    //   .map(rawHarvests => rawHarvests
    //     .map(rawHarvest => HarvestFactory.fromObject(rawHarvest)));
    // var harvest =  rawHarvest.map(rawHarvest => HarvestFactory.fromObject(rawHarvest));
     var harvest =rawHarvest.snapshotChanges().map(action => {
      const data = action.payload.data() as Harvest;
      const id = action.payload.id;
      data.id = id;
      //data.jsDate = data.date.getDate();
      let date = data.date as firebase.firestore.Timestamp;
      data.date = date;
      data.jsDate = date.toDate();
      return { ...data };
    });
   
     return harvest;
  }

  create(harvest: Harvest){
    var item = {
      name: harvest.name,
      userId: harvest.userId,
      comment: harvest.comment,
      date: harvest.jsDate.toString(),
      location: harvest.location,
      action: harvest.action,
      isPublic: harvest.isPublic
    };

    // hack
    let month = String(harvest.jsDate.getMonth() + 1);
    let day = String(harvest.jsDate.getDate());
    const year = String(harvest.jsDate.getFullYear());

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    item.date = `${year}-${month}-${day} ${harvest.jsDate.getHours()}:${harvest.jsDate.getMinutes()}`;
    harvest.id = "dummy";
    //debugger;
    this.harvestItems.add({... harvest});
    //this.harvestItems.add(item);
    
    // return this.http
    //   .post(`${this.api}/harvest`, JSON.stringify(harvest), { headers: this.headers })
    //   .catch(this.errorHandler);
  }

  update(id: string, harvest: Harvest): void {
    var item = {
      name: harvest.name,
      userId: harvest.userId,
      comment: harvest.comment,
      date: harvest.jsDate,
      location: harvest.location,
      action: harvest.action,
      isPublic: harvest.isPublic
    };
    harvest.id = 'dummy';
    this.afs.doc(`harvestItems/${id}`).update({... harvest});
  }

  // remove(isbn: string): Observable<any> {
  //   return this.http
  //     .delete(`${this.api}/harvest/${isbn}`)
  //     .catch(this.errorHandler);
  // }

    public remove(item: Harvest) {
    this.harvestItems.doc(item.id).delete();
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }

  public clear():void
  {
    this.harvestItems = undefined;
  }

  getActions(): Observable<Array<Action>> {
    var actions =  this.actionItems.snapshotChanges().map(items => {
     return items.map(item => {
       const data = item.payload.doc.data() as Action;
       data.id = item.payload.doc.id;
       console.log('>>>>', {  ...data });
      
       return { ...data };
     });
   });
       //.map(response => response.json())
       //.map(rawHarvests => rawHarvests.filter(p=>p.userId == localStorage.getItem('uid')))
       // .map(rawHarvests => 
       
       // {
       //   var result = rawHarvests
       //   .map(rawHarvest => HarvestFactory.fromObject(rawHarvest));
       //   return result;
       // }
       // )
       // .map((array) => array.reverse()); //.catch(this.errorHandler);
       // change order 
       return actions; //.filter(p=>p.userId==localStorage.getItem('uid'));
   }
 
   
  // getAllSearch(searchTerm: string): Observable<Array<Harvest>> {
  //   return this.http
  //     .get(`${this.api}/harvests/search/${searchTerm}`)
  //     .retry(3)
  //     .map(response => response.json())
  //     .map(rawHarvests => rawHarvests
  //       .map(rawHarvest => HarvestFactory.fromObject(rawHarvest))
  //     )
  //     .catch(this.errorHandler);
  // }
}

