import {Component} from "@angular/core";
import {dashboardservice} from "../services/dashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./camps.component.html"
})
export class campscomponent{
    private result:any;
    private blood_camps:any;
    private blood_camps_sub:any;
    private campsSubScribe:any;
    constructor(private service:dashboardservice,private router:Router){}
    ngOnInit(){
        this.campsSubScribe=this.service.campsdata().subscribe(this.successcallback,this.errorcallback);
        this.blood_camps_sub=this.service.campslimit().subscribe(this.successcallback2,this.errorcallback);
      }
    public successcallback=(res):any=>{
        this.result=res;
    }
    public successcallback2=(res):any=>{
        this.blood_camps=res;
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error)
        {
            console.log("client side error");
        } else {
            console.log("server side error...");
        }
    }
    ngOnDestroy(){
         this.campsSubScribe.unsubscribe();
     if(this.blood_camps_sub)
     {
        this.blood_camps_sub.unsubscribe();
  }
    this.router.navigate(["list"]);
    }
}