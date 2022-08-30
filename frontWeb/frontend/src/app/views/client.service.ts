import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './client.model';
import { map, catchError } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar' /*Para utilizar esse componente deve-se importar o modulo no app.module */



@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3001/client"


  constructor(private snackBar: MatSnackBar, private http: HttpClient) {

   }
  showMessage(msg: string, isError: boolean = false): void {//utilizado para exibir snack Bar
    this.snackBar.open(msg,"", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(client: Client): Observable<Client>{
    return this.http.post<Client>(this.baseUrl, client).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  errorHandler(e: any): Observable<any> { /*Mostra erro caso o json server estada parado*/
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
