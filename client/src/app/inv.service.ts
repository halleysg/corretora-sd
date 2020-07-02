import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Investment } from './investment'

@Injectable()
export class InvService {

    constructor(private http: HttpClient) { }

    public register(user: Investment): Observable<any> {
        return this.http.post(`/users/profile/analista`, user)
    }   

    public listInvs(): Observable<any> {
        return this.http.get(`/users/profile/homebroker`, )
    }
}