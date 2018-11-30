import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class insertcampservice{
    constructor(private _http:HttpClient){}
    public insertcamp(obj:any):any{
        return this._http.post("http://localhost:8080/insertcamps",obj);
    }
}