import {Component, OnInit} from '@angular/core';
import {HeroModel} from "../../shared/models/hero.model";
import {HeroService} from "../../shared/services/hero.service";
import {map} from "rxjs";
import {HeroPowerColorService} from "../../shared/services/hero-power-color.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public heroes?: HeroModel[];

  constructor(private readonly heroService: HeroService, public readonly heroPowerColorService: HeroPowerColorService) {
  }

  ngOnInit() {
    this.heroService.getAll()!.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.heroes = data;
      console.log(data)
    });
    }
}
