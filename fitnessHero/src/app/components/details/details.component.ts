import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map, Subscription} from "rxjs";
import {HeroService} from "../../shared/services/hero.service";
import {AuthService} from "../../shared/services/auth.service";

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
              private readonly authService: AuthService, private readonly r: Router) {
  }

  ngOnInit() {
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
        console.log(this.hero)
      })
    });
  }

  ngOnDestroy() {
    this.routeSubscription!.unsubscribe();
  }

  redirect() {
    this.r.navigate(['/home']);
  }

  logOut() {
    this.authService.SignOut();
  }
  goTo() {
    this.r.navigate([`/home/`]);
  }
}
