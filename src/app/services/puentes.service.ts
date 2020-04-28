import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PuenteInfo } from '../interfaces/puente.interface';

@Injectable({
  providedIn: 'root'
})
export class PuentesService {

  cargando = true;

  puentes: PuenteInfo[];



  constructor(private http: HttpClient) { 

    this.cargarPuentes();
  }

  private cargarPuentes(){
    this.http.get('https://angularpuentes.firebaseio.com/puentes_idx.json')
    .subscribe((resp: PuenteInfo[]) => {
      console.log(resp);
      this.cargando = false;
      this.puentes = resp;

      //Para probar el loading
      // setTimeout(()=>{
      //   this.cargando=false;
      // },2000);
    });
  }

  getPuenteById(id: string){

    return this.http.get(`https://angularpuentes.firebaseio.com/puentes/${id}.json`);
    
  }
}
