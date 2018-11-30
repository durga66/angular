import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class dashboardservice{
    constructor(private _http:HttpClient){}
    public donorsdata():any{
        return this._http.get("http://localhost:8080/donors")
    }
    public donorscount():any{
        return this._http.get("http://localhost:8080/donors/count")
    }
    public campslimit():any{
        return this._http.get("http://localhost:8080/camps/list")
    }
public campsdata():any{
return this._http.get("http://localhost:8080/camps")
}
public logout():any{
    var login_details=window.localStorage.getItem("registration");
        var obj=JSON.parse(login_details);
return this._http.post("http://localhost:8080/logout",{"token":obj.token})
}
    
}