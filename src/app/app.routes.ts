import { Routes } from '@angular/router';
import { LayoutsPage } from './features/layouts/pages/layouts-page';
import { HomePage } from './features/home/pages/home-page/home-page';
import { StudentPage } from './features/students/pages/student-page/student-page';
import { StudentDetailPage } from './features/students/pages/student-detail-page/student-detail-page';

export const routes: Routes = [

    {path: '',component: LayoutsPage},

    {path: 'home',component: HomePage},

    {path: 'students',component: StudentPage},

    {path: 'students/:id',component: StudentDetailPage},

    // Redireccionamiento
    {path: '**',redirectTo: ''}

];
