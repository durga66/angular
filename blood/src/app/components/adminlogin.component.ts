import {Component} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {adminloginservice} from "../services/adminlogin.service";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./adminlogin.component.html"
})
export class adminlogincomponent
      {
         private adminloginSubScribe:any;
         constructor(private service:adminloginservice,private router:Router){}
        public login(obj):any
            {
             this.adminloginSubScribe=this.service.authenticate(obj).subscribe(this.successcallback,this.errorcallback);
        }
            public successcallback=(res):any=>{
            if(res.login=="success")
                {
                alert("hello");
                 window.localStorage.setItem("login_details",JSON.stringify(res));
                 this.router.navigate(["/admindashboard"]);
            } else {
                 alert("invalid details");
        }
    }
        public errorcallback=(err:HttpErrorResponse):any=>{
            if(err.error instanceof Error)
            {
        console.log("client side error..");
        } else {
        console.log("server side error");
    }
}

ngOnDestroy() {/*
     if(this.adminloginSubScribe){
    this.adminloginSubScribe.unsubscribe();
     }
     this.router.navigate(["/"]);  */

}
}