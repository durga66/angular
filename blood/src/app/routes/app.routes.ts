import {Routes} from "@angular/router";
import { userlogincomponent } from "../components/login.component";
import { dashboardcomponent } from "../components/dashboard.component";
import { donorscomponent } from "../components/donors.component";
import { campscomponent } from "../components/camps.component";
import { registrationcomponent } from "../components/registration.component";
import { adminlogincomponent } from "../components/adminlogin.component";
import { admindashboardcomponent } from "../components/admindashboard.component";
import { insertcomponent } from "../components/insertcamp.component";
import { updatecomponent } from "../components/update.component";
import {campslatestcomponent} from "../components/campslatest.component";
export const appRoutes:Routes=[
    {path:"adminlogin",component:adminlogincomponent},
    {path:"admindashboard",component:admindashboardcomponent,children:[
                                                                {path:"donors",component:donorscomponent},
                                                                {path:"camps",component:campscomponent}]},
    {path:"admindashboard/insertcamps",component:insertcomponent},
    {path:"admindashboard/camps/list",component:campslatestcomponent},
    {path:"",component:userlogincomponent},
    {path:"update",component:updatecomponent},
    {path:"registration",component:registrationcomponent},
    {path:"dashboard",component:dashboardcomponent,children:[
                                                     {path:"donors",component:donorscomponent},
                                                     {path:"camps",component:campscomponent}]},
    {path:"dashboard/camps/list",component:campslatestcomponent}
]