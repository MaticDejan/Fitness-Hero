import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private dbPath = '/heroes';
  heroesRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.heroesRef = db.list(this.dbPath);
  }

  public getAllHeroes(): AngularFireList<any> {
    return this.heroesRef;
  }

  public updateHero(key: string, data: any): Promise<void> {
    return this.heroesRef.update(key, data);
  }
}
