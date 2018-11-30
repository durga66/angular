import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class userloginservice{
    constructor(private http:HttpClient){}
    public authenticate(obj:any):any{
        return this.http.post("http://localhost:8080/userlogin",obj)
    }
}