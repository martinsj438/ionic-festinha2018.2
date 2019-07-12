import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { Evento } from './../model/evento';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(
    public db: AngularFireDatabase
  ) { }

  save(evento:Evento){
    return this.db.list("evento").push(evento);

  }

  getAll(){
    return this.db.list("evento").snapshotChanges()
    .pipe(
      map(noCopyIsDocs =>
        noCopyIsDocs.map(c=> ({ key: c.payload.key, ...c.payload.val()})))
    )
  }

  get(key:string){
    return this.db.object<Evento>("evento/" + key).valueChanges()
  }

}

