import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {HeroModel} from "../models/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private dbPath = '/heroes';
  heroesRef: AngularFireList<HeroModel>;

  constructor(private db: AngularFireDatabase) {
    this.heroesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<HeroModel> {
    return this.heroesRef;
  }
}
