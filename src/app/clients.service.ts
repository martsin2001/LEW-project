import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataClientsSevrvice {
    readonly URL_CLIENTS:string = "http://localhost:3000/users";
    readonly URL_DATA_CLIENTS:string = "http://localhost:3000/dataUsers";

    constructor( private http: HttpClient ){}

    getClients(){
        return this.http.get(this.URL_CLIENTS)
    }

    postClient(client){
        return this.http.post(this.URL_CLIENTS, client)
    }



    getDataUser(id){
        return this.http.get(`${this.URL_DATA_CLIENTS}/${id}`)
    }

    updateDataUser(id, data){
        return this.http.put(`${this.URL_DATA_CLIENTS}/${id}`, data)
    }
}