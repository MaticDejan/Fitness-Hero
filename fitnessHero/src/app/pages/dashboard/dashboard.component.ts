import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {HeroService} from "../../shared/services/hero.service";
import {map} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public heroes: any;

  constructor(public authService: AuthService, public readonly heroService: HeroService) {
  }

  public ngOnInit() {
    this.heroService.getAllHeroes()!.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(data => {
      this.heroes = data;
    });
  }
}
