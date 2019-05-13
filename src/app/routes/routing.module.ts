import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../components/login/login.component';
import { SignupComponent } from '../components/signup/signup.component';
import { NgModule } from '@angular/core';
import { CalendarComponent } from '../components/calendar/calendar.component';
import { ChatAppComponent } from '../components/chat-app/chat-app.component';
import { TableComponent } from '../components/table/table.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'calendar',
        component: CalendarComponent
    },
    {
        path: 'chat',
        component: ChatAppComponent
    },
    {
        path: 'table',
        component: TableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // exports: [RouterModule]
})
export class AppRoute { }