import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page'; // <-- Verifica que esta ruta sea la real
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { SingupPage } from './features/singup-page/singup-page';
import ProfilePage from './features/profile/pages/profile-page';
import ProjectConfigPage from './features/profile/pages/project-config-page';

export const routes: Routes = [
    { path: '', component: HomePage },
    { path: 'students', component: StudentPage },
    { path: 'students/:id', component: StudentDetailPage },
    { path: 'layouts', component: LayoutsPage },
    { path: 'singup', component: SingupPage },
    { path: 'profile', component: ProfilePage },
    { path: 'project-config', component: ProjectConfigPage },
    { path: '**', redirectTo: '' }


  ];

