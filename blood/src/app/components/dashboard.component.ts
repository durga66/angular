import {Component} from "@angular/core";
import {dashboardservice} from "../services/dashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./dashboard.component.html"
})
export class dashboardcomponent{
    private logoutSubScribe:any;
    constructor(private service:dashboardservice,private router:Router){}
    public logout():any{
        this.logoutSubScribe=this.service.logout().subscribe(this.successcallback,this.errorcallback);

    }
    public successcallback=(res):any=>{
        if(res.token=="deleted successfully"){
            window.localStorage.removeItem("registration");
            this.router.navigate(["/"]);
        }else{
            alert("logout terminated insuccessfully...");
        }
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side errror...");
        }else{
            console.log(err)
            console.log("server side error...");
        }
    }
    ngOnDestroy(){
        if(this.logoutSubScribe){
        this.logoutSubScribe.unsubscribe();
    }
    this.router.navigate(["list"])
}
}