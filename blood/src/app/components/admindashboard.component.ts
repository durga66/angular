import {Component} from "@angular/core";
import {admindashboardservice} from "../services/admindashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./admindashboard.component.html"
})
export class admindashboardcomponent{
    private logoutSubScribe:any;
    constructor(private service:admindashboardservice,private router:Router){}
    public adminlogout():any
    {
            this.logoutSubScribe=this.service.adminlogout().subscribe(this.successcallback,this.errorcallback);
    }
    public successcallback=(res):any=>{
        console.log(res);
        if(res.token=="deleted successfully")
             {
            window.localStorage.removeItem("login_details");
            this.router.navigate(["/"]);
        } else {
            alert("logout terminated insuccessfully...");
        }
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side errror...");
        }else{
            console.log("server side error...");
        }
    }
    ngOnDestroy() {
                if(this.logoutSubScribe)
                {
                 this.logoutSubScribe.unsubscribe();
            }
            this.router.navigate(["insertcamps"]);
            this.router.navigate(["donors"]);
            this.router.navigate(["camps"]);
         }

    }