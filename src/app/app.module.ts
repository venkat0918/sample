import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout'
import { from } from 'rxjs';
import { SignupComponent } from './components/signup/signup.component';
import { AppRoute } from './routes/routing.module';
import { MatInputModule,MatTableModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChatAppComponent } from './components/chat-app/chat-app.component';
import { ClipboardModule } from 'ngx-clipboard';
import { TableComponent } from './components/table/table.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent, SignupComponent, CalendarComponent, ChatAppComponent, TableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    FlexLayoutModule,
    RouterModule,
    AppRoute,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
