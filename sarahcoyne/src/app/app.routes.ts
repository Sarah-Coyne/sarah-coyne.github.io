import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InterestsComponent } from './pages/interests/interests.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { FunComponent } from './pages/fun/fun.component';
import { NavButtonsComponent } from './pages/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'interests', component: InterestsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'resume', component: ResumeComponent },
    { path: 'fun', component: FunComponent },
    { path: 'nav-buttons', component: NavButtonsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
