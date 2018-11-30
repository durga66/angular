import {Component} from "@angular/core";
import {insertcampservice} from "../services/insertcamps.service";;
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    selector:"insertcamps",
    templateUrl:"./insertcamp.component.html"
})
export class insertcomponent{
    private insertSubScribe:any;
    constructor(private _service:insertcampservice,private router:Router){}
        public save(obj:any):any {
            this.insertSubScribe=this._service.insertcamp(obj).subscribe(this._successcallback,this._errorcallback);
        }
        public _successcallback=(res):any=>{
            if(res.insert == "success"){
                alert("data successfully entered")
                window.localStorage.setItem("blood_camps",JSON.stringify(res));
            this.router.navigate(["/admindashboard"]);
            }
        }
        public _errorcallback=(err:HttpErrorResponse):any=>{
            if(err.error instanceof Error){
                console.log("client side error");
            
            } else {
                console.log("server side error")
            }
        }
        ngOnDestroy() {
            if(this.insertSubScribe)
            {
         this.insertSubScribe.unsubscribe();
        }
        this.router.navigate(["/admindashboard"]);
    }
    }
