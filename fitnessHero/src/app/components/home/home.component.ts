import {Component, OnInit} from '@angular/core';
import {HeroModel} from "../../shared/models/hero.model";
import {HeroService} from "../../shared/services/hero.service";
import {map} from "rxjs";
import {HeroPowerColorService} from "../../shared/services/hero-power-color.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public heroes?: any[];

  constructor(private readonly heroService: HeroService, public readonly heroPowerColorService: HeroPowerColorService,
              private router: Router) {
  }

  ngOnInit() {
    this.heroService.getAllHeroes()!.snapshotChanges().pipe(
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

  public navigateTo(key: string) {
    this.router.navigate([key]);
  }

}
