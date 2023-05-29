import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, Subscription} from "rxjs";
import {HeroService} from "../../shared/services/hero.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {HeroPowerColorService} from "../../shared/services/hero-power-color.service";
import {ThemePalette} from "@angular/material/core";
import {ProgressBarMode} from "@angular/material/progress-bar";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent implements OnInit, OnDestroy {
  private routeSubscription: Subscription | undefined;
  private key?: string;
  public hero?: any;
  public trainings?: any;
  public dailyTrainings?: {
    day: number,
    exercises: string[]
  }[] = [];
  public training?: {
    day: number,
    exercises: string[]
  };
  public color: ThemePalette = 'primary';
  public mode: ProgressBarMode = 'determinate';
  public value = 0;
  public currentDay = 1;
  public completed = false;

  constructor(private readonly heroService: HeroService, private readonly route: ActivatedRoute,
              public readonly authService: AuthService, private readonly r: Router,
              public readonly heroPowerColorService: HeroPowerColorService) {
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
        this.trainings = Object.values(this.hero.trainings);
        this.currentDay = this.hero.day;

        let ct = 1;
        this.trainings.forEach((training: any) => {
          this.dailyTrainings!.push({
            day: ct,
            exercises: Object.values(training)
          });
          ct++;
        });

        if (this.dailyTrainings && this.currentDay === this.dailyTrainings[this.dailyTrainings.length - 1].day) {
          this.heroService.updateHero(this.hero.key, {
            ...this.hero,
            completed: true
          }).then(this.completed = this.hero.completed);
        } else {
          this.completed = false;
        }

        this.dailyTrainings!.forEach((dailyTraining: any) => {
          if (dailyTraining.day === this.currentDay) {
            this.training = dailyTraining;
          }
        });
      })
    });
  }

  public ngOnDestroy() {
    this.routeSubscription!.unsubscribe();
  }

  public redirect() {
    this.heroService.updateHero(this.hero.key, {
      ...this.hero,
      day: 1,
      completed: false
    });
    this.r.navigate(['/home']);
  }

  public finish() {
    this.heroService.updateHero(this.hero.key, {
      ...this.hero,
      completed: true,
      numberOfCompletes: (this.hero.numberOfCompletes + 1),
    });
    this.r.navigate(['/home']);
  }

  public logOut() {
    this.authService.SignOut();
  }

  public addProgress($event: MatCheckboxChange) {
    if (this.training) {
      if ($event.checked) {
        this.value = this.value + 100 / this.training.exercises.length;
      } else {
        this.value = this.value - 100 / this.training.exercises.length;
      }
    }
  }

  public submit() {
    this.value = 0;
    if (this.dailyTrainings && this.currentDay < this.dailyTrainings[this.dailyTrainings.length - 1].day) {
      this.heroService.updateHero(this.hero.key, {
        ...this.hero,
        day: (this.currentDay + 1),
        completed: false
      });
    } else {
      this.heroService.updateHero(this.hero.key, {
        ...this.hero,
        day: 1,
        completed: false
      });
    }
  }
}
