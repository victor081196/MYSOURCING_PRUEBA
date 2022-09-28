import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {

  constructor(public http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('https://randomapi.com/api/969f99365dc0128048794989096a000c');
  }
}
