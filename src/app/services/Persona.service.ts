import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
};
const API_URL = 'http://localhost:8080/getPersonas';
const API_URL_CEDULA = 'http://localhost:8080//getPersonas/Cedula/{cedula}';
const API_URL_APELLIDOS = 'http://localhost:8080//getPersonas/Apellido/{apellido}';
const API_URL_NOMBRES = 'http://localhost:8080//getPersonas/Nombre/{nombre}';
const API_URL_CORREOE = 'http://localhost:8080//getPersonas/CorreoEspe/{correoEspe}';
const API_URL_CORREOP= 'http://localhost:8080//getPersonas/CorreoPersonal/{correoPersonal}';
const API_URL_CREATE = 'http://localhost:8080/saveOrUpdatePersona';
const API_URL_DELETE = 'http://localhost:8080/deletePersonas';

@Injectable()

export class PersonaService {
    apiUrl: string;
    constructor(private http:HttpClient) {}

    buscarDatosPersona(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL);
    }
    buscarDatosPersonaCedula(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL_CEDULA);
    }
    buscarDatosPersonaApellidos(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL_APELLIDOS);
    }
    buscarDatosPersonaNombres(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL_NOMBRES);
    }
    buscarDatosPersonaCorreoE(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL_CORREOE);
    }
    buscarDatosPersonaCorreoP(): Observable<Persona[]>{
        return this.http.get<Persona[]>(API_URL_CORREOP);
    }
    crearOActualizarGenero(persona: Persona): Observable<Persona[]>{
        return this.http.post<Persona[]>(API_URL_CREATE,persona );
    }
    deletePersonas(persona: Persona):Observable<Persona[]>{
        return this.http.post<Persona[]>(API_URL_DELETE,persona);
    }
}