import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ResultsComponent} from "./components/results/results.component";
import {NewResultComponent} from "./components/results/new-result/new-result.component";
import {EditResultComponent} from "./components/results/edit-result/edit-result.component";

const routes: Routes = [
  { path: '' , component: MainComponent, children: [
      { path: '', redirectTo: '/results', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      {path: 'results', children: [
          { path: '', component: ResultsComponent},
          { path: 'add-result' , component: NewResultComponent},
          { path: 'edit-result/:id' , component: EditResultComponent},
          { path: '**', redirectTo: '', pathMatch: 'full'}
        ]}
    ]},
  { path : 'login' , component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
