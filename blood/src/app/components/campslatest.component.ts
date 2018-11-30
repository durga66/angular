import {Component} from "@angular/core";
import {dashboardservice} from "../services/dashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    templateUrl:"./campslatest.component.html"
})
export class campslatestcomponent{
    private blood_camps:any;
    private blood_camps_sub:any;
    constructor(private service:dashboardservice,private router:Router){}
    ngOnInit(){
        this.blood_camps_sub=this.service.campslimit().subscribe(this.successcallback,this.errorcallback);
    }
    
    public successcallback=(res):any=>{
        this.blood_camps=res;
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side error");
        }else{
            console.log("server side error...");
        }
    }
    ngOnDestroy(){

        this.blood_camps_sub.unsubscribe();
    
    }

}