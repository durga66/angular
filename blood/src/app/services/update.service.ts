import {Injectable}  from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class updateservice {
constructor(private http:HttpClient){}
public updatedata(obj:any):any{
 return this.http.post("http://localhost:8080/update",obj);
}
}