import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { indexcomponent } from './components/index.component';
import { userlogincomponent } from './components/login.component';
import { donorscomponent } from './components/donors.component';
import { campscomponent } from './components/camps.component';
import { HttpClientModule } from '@angular/common/http';
import { userloginservice } from './services/userlogin.service';
import { dashboardservice } from './services/dashboard.service';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes/app.routes";
import {FormsModule} from "@angular/forms";
import { dashboardcomponent } from './components/dashboard.component';
import { registrationcomponent } from './components/registration.component';
import { registrationservice } from './services/registration.service';
import { admindashboardcomponent } from './components/admindashboard.component';
import { adminlogincomponent } from './components/adminlogin.component';
import { adminloginservice } from './services/adminlogin.service';
import { admindashboardservice } from './services/admindashboard.service';
import { insertcomponent } from './components/insertcamp.component';
import { insertcampservice } from './services/insertcamps.service';
import { updateservice } from './services/update.service';
import { updatecomponent } from './components/update.component';
import {campslatestcomponent} from "./components/campslatest.component";

@NgModule({
  declarations: [
    AppComponent,indexcomponent,userlogincomponent,donorscomponent,
    campscomponent,dashboardcomponent,registrationcomponent,admindashboardcomponent,
    adminlogincomponent,insertcomponent,updatecomponent,campslatestcomponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [userloginservice,dashboardservice,registrationservice,adminloginservice,admindashboardservice,insertcampservice,updateservice],
  bootstrap: [indexcomponent]
})
export class AppModule { }
