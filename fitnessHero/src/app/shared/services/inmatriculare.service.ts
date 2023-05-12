import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {getDatabase, push, ref, set} from "firebase/database";
import {inmatriculareModel} from "../models/inmatriculare.model";


@Injectable({
  providedIn: 'root'
})
export class InmatriculareService {
  private dbPath = '/nrInmatriculare';
  inmatriculare: AngularFireList<inmatriculareModel>;

  constructor(private db: AngularFireDatabase) {
    this.inmatriculare = db.list(this.dbPath);
    console.log(db.list(this.dbPath));
  }

  getAll(): AngularFireList<inmatriculareModel> {
    return this.inmatriculare;
  }
  post(numar: string | null){
    const db = getDatabase();
    const postListRef = ref(db, this.dbPath);
    const newPostRef = push(postListRef);
    set(newPostRef, {
      nrInmatriculare: numar,
    });
  }
}
