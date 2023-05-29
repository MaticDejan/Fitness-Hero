import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {CardComponent} from './shared/components/card/card.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {VerifyEmailComponent} from './pages/verify-email/verify-email.component';
import {AuthService} from "./shared/services/auth.service";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";
import {FieldsetInputComponent} from './shared/components/fieldset-input/fieldset-input.component';
import {DetailsComponent} from "./pages/details/details.component";
import {TextContainerComponent} from './shared/components/text-container/text-container.component';
import {ProgressComponent} from './pages/progress/progress.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FieldsetInputComponent,
    DetailsComponent,
    TextContainerComponent,
    ProgressComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
