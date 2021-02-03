import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) {
  }

  getTree(id): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/tree/' + id);
  }

  getTrees(): Observable<any> {
    return this.http.get(environment.apiUrl + '/api/trees');
  }

  createTree(formData) {
    return this.http.post(environment.apiUrl + '/api/tree/create', formData, {});
  }

  deleteTree(id) {
    return this.http.delete(environment.apiUrl + '/api/tree/' + id + '/delete');
  }
}
