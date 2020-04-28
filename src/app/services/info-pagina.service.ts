import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  about: any[] = [];

  constructor(private http: HttpClient) {

   this.cargarInfo();

   this.cargarAbout();

   }

   private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
            this.cargada = true;
            this.info = resp;
    });

   }

   private cargarAbout(){
     this.http.get('https://angularpuentes.firebaseio.com/about.json')
     .subscribe((resp: any[]) => {
       this.about = resp;     
     });
   }
}
