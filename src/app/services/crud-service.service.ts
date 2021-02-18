import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { ICrudOperations } from 'src/app/shared/interfaces/icrud-operations';


export abstract class CrudServiceService<T, ID> implements ICrudOperations<T, ID> {

  constructor(
    protected _http: HttpClient,
    protected _base: string
  ) {}

  findOne(id: number): Observable<T> {
    return this._http.get<T>(this._base + "/" + id).pipe(retry(3));
  }

  findAll(): Observable<T[]> {
    return this._http.get<T[]>(this._base).pipe(retry(3));
  }

  post<T>(t: T): Observable<T> {
    return this._http.post<T>(this._base, t);
  }

  update<T>(id: number, t: T): Observable<T> {
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

  delete(id: number): Observable<T> {
    return this._http.delete<T>(this._base + '/' + id);
	}
}
