import {Component} from "@angular/core";
import {dashboardservice} from "../services/dashboard.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router"
@Component({
    templateUrl:"./donors.component.html"
})
export class donorscomponent{
    private result:any;
    searchTerm:string;
    private donorsSubScribe:any;
    private donors_count:any;
    private donors_count_sub:any;

    constructor(private service:dashboardservice,private router:Router){}
    ngOnInit() {
        this.donorsSubScribe=this.service.donorsdata().subscribe(this.successcallback,this.errorcallback);
        this.donors_count_sub=this.service.donorscount().subscribe(this.successcallback1,this.errorcallback);
    }
    public successcallback=(res):any=>{
        this.result=res;
        
    }
    public successcallback1=(res):any=>{
        this.donors_count=res;
        console.log(this.donors_count);
    }
    public errorcallback=(err:HttpErrorResponse):any=>{
        if(err.error instanceof Error){
            console.log("client side error");
        }else{
            console.log("server side error...");
        }
    }
    ngOnDestroy() {
        this.donorsSubScribe.unsubscribe();
        this.donors_count_sub.unsubscribe();
            }
    }
