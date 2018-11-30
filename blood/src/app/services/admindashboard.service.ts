import{Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class admindashboardservice{
    constructor(private http:HttpClient){}
    
    public donorsdata():any{
        return this.http.get("http://localhost:8080/donors");
    }
    public campsdata():any{
        return this.http.get("http://localhost:8080/camps"); 
    }
    public adminlogout():any{
        var admin_login=window.localStorage.getItem("login_details");
        var obj=JSON.parse(admin_login);
        return this.http.post("http://localhost:8080/adminlogout",{"token":obj.token});
    }

}