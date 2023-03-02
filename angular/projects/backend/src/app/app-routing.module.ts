import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/main/main.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ResultsComponent} from "./components/results/results.component";
import {NewResultComponent} from "./components/results/new-result/new-result.component";
import {EditResultComponent} from "./components/results/edit-result/edit-result.component";
import {StudentsComponent} from "./components/students/students.component";
import {SearchResultComponent} from "./components/serch-result/search-result.component";
import {AuthGuard} from "./guards/auth.guard";
import {AddStudentComponent} from "./components/students/add-student/add-student.component";
import {EditStudentComponent} from "./components/students/edit-student/edit-student.component";

const routes: Routes = [
  { path: '' , component: MainComponent, canActivate: [AuthGuard] , children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'students' , children: [
          { path: '', component: StudentsComponent},
          { path: 'add-student', component: AddStudentComponent},
          { path: 'edit-student/:id', component: EditStudentComponent},
        ]},
      {path: 'results', children: [
          { path: '', component: ResultsComponent},
          { path: 'search', component: SearchResultComponent},
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
