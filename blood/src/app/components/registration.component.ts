import {Component} from "@angular/core";
import {registrationservice} from "../services/registration.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    selector:"registration",
    templateUrl:"./registration.component.html"
})
export class registrationcomponent{
    private registrationSubScribe:any;
    constructor(private _service:registrationservice,private router:Router){}
        public save(obj:any):any{
            this.registrationSubScribe=this._service.registrationinsert(obj).subscribe(this._successcallback,this._errorcallback);
        }
        public _successcallback=(res):any=>{
            alert(res.insert);
            console.log(res.insert);
            if(res.insert == "success"){
                alert("successfully registered");
                window.localStorage.setItem("registration",JSON.stringify(res));
            this.router.navigate([""]);      
              }
        }
        public _errorcallback=(err:HttpErrorResponse):any=>{
            if(err.error instanceof Error){
                console.log("client side error");
            
            } else {
                console.log("server side error")
            }
        }
        ngOnDestroy(){
            if(this.registrationSubScribe) {
                this.registrationSubScribe.unsubscribe();
        }
        this.router.navigate(["/"]);
    }
}