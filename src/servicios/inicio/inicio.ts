import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.servicios';

@Injectable()
export class InicioService {
  respuesta_pregunta:any[] = [];
  mensaje_pregunta:any[] = [];
  itemsd_id: string = "true";
  constructor(public http: Http){
  }
	getCursos(){
		let url = URL_SERVICIOS + 'api/generos/xd';
		return this.http.get(url).map(res => res.json());
	}
	register(email:string,descripcion:string){
		let url = URL_SERVICIOS + 'api/generos/res';
		let datas = new URLSearchParams();
		datas.append("email", email);
  		datas.append("descripcion", descripcion);
		return this.http.post(url, datas).map(res => res.json()).subscribe( 
		data => { 
		    if(data.error){
			}else{
			    if(data.codigo = 'success'){
						this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			       		this.itemsd_id  = "false";
			    }else{
			    		this.respuesta_pregunta = data.codigo;
			       		this.mensaje_pregunta = data.msg;
			    }
			}
    	});
	}
}
