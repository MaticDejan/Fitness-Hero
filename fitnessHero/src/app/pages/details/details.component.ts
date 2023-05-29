import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Subscription} from "rxjs";
import {HeroService} from "../../shared/services/hero.service";
import {AuthService} from "../../shared/services/auth.service";
import {HeroPowerColorService} from "../../shared/services/hero-power-color.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription | undefined;
  private key?: string;
  public hero?: any;

  constructor(private readonly heroService: HeroService, private readonly route: ActivatedRoute,
              private readonly authService: AuthService, private readonly r: Router, public readonly heroPowerColorService: HeroPowerColorService) {
  }

  public ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.key = params['key'];
      this.heroService.getAllHeroes()!.snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({key: c.payload.key, ...c.payload.val()})
          )
        )
      ).subscribe(data => {
        this.hero = data.find(hero => hero.key === this.key);
      })
    });
  }

  public ngOnDestroy() {
    this.routeSubscription!.unsubscribe();
  }

  public redirect() {
    this.r.navigate(['/home']);
  }

  public logOut() {
    this.authService.SignOut();
  }

  public navigateTo(key: string) {
    this.r.navigate([`progress/${key}`]);
  }

  public retry(key: string) {
    this.heroService.updateHero(this.hero.key, {
      ...this.hero,
      day: 1,
      completed: false
    });
    this.r.navigate([`progress/${key}`]);
  }

  public myProfile() {
    this.r.navigate(['/dashboard']);
  }
}
