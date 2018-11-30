import {Component} from "@angular/core";
import {updateservice} from "../services/update.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
    selector:"update",
    templateUrl:"./update.component.html"
})
export class updatecomponent{
private updateSubScribe:any;
constructor(private service:updateservice,private router:Router){}
public save(obj:any):any{
    this.updateSubScribe=this.service.updatedata(obj).subscribe(this.successcallback,this.errorcallback);
}
public successcallback=(res):any=>{
    if(res.update == "success"){
        alert("password changed...login back");
        window.localStorage.setItem("registration",JSON.stringify(res));
        this.router.navigate([""]);
    }
    
}
public errorcallback=(err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
        console.log("client side error..")
    } else {
        console.log("server side error");
    }
}
ngOnDestroy(){
    if(this.updateSubScribe){
 this.updateSubScribe.unsubscribe();
    }
this.router.navigate(['/']);
}
}