import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./pages/forgot-password/forgot-password.component";
import {VerifyEmailComponent} from "./pages/verify-email/verify-email.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {DetailsComponent} from "./pages/details/details.component";
import {ProgressComponent} from "./pages/progress/progress.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'details/:key', component: DetailsComponent},
  {path: 'progress/:key', component: ProgressComponent},
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
