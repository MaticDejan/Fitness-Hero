import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../shared/services/hero.service";
import {map} from "rxjs";
import {HeroPowerColorService} from "../../shared/services/hero-power-color.service";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public heroes?: any[];

  constructor(private readonly heroService: HeroService, public readonly heroPowerColorService: HeroPowerColorService,
              private router: Router, private readonly authService: AuthService) {
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

  public navigateTo(key: string) {
    this.router.navigate([`details/${key}`]);
  }

  public logOut() {
    this.authService.SignOut();
  }

  public myProfile() {
    this.router.navigate(['/dashboard']);
  }
}
