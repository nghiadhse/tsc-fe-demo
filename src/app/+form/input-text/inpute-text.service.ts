import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPro/mise';

@Injectable()
export class InputTextService {

    public header: any;
    constructor(private http: HttpClient) {
    }

    post(data: any) {
        return this.http.post(
            "http://localhost:8080/api/student/add",
            data);
    }

    put(id: any, data: any) {
        return this.http.put(
            `http://localhost:8080/api/student/${id}`,
            data);
    }

    getAll() {
        return this.http.get(
            `http://localhost:8080/api/student/all`);
    }

    delete(id: any) {
        return this.http.delete(
            `http://localhost:8080/api/student/${id}`);
    }    

}
