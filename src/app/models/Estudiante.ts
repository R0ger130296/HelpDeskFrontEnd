export class Estudiante {
    public TIE_CODIGO: number;
    public TIE_NOMBRE: string;
    constructor($TIE_CODIGO: number, $TIE_NOMBRE: string ){
        this.TIE_CODIGO = $TIE_CODIGO;
        this.TIE_NOMBRE = $TIE_NOMBRE;
    }
}