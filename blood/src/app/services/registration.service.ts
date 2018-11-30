import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class registrationservice{
    constructor(private _http:HttpClient){}
    public registrationinsert(obj:any):any{
        return this._http.post("http://localhost:8080/registration",obj);
    }
}