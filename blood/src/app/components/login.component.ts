import {Component} from "@angular/core";
import {userloginservice} from "../services/userlogin.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./login.component.html"
})
export class userlogincomponent{
    private userloginSubScribe:any;
    constructor(private service:userloginservice,private router:Router){}
    public login(obj:any):any{
        this.userloginSubScribe= this.service.authenticate(obj).subscribe(this.successcallback,this.errorcallback);

    }
    public successcallback=(res):any=>{
        if(res.login=="success"){
            window.localStorage.setItem("registration",JSON.stringify(res));
            this.router.navigate(["/dashboard"]);
        } else {
            alert("invalid details....");
            alert("enter correct details...")
        }
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side error..");
        }else{
            console.log("server side error");
        }
    }
   ngOnDestroy() {   
       if(this.userloginSubScribe){
    this.userloginSubScribe.unsubscribe();
   
   }
       this.router.navigate(["registration"]);
       this.router.navigate(["update"]);
}
}