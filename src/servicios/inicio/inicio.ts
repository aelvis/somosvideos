import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { URL_SERVICIOS } from '../../config/url.servicios';

@Injectable()
export class InicioService {

  constructor(public http: Http){
  }
	getCursos(){
		let url = URL_SERVICIOS + 'usuario/xd';
		return this.http.get(url).map(res => res.json());
	}
}
