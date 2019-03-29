export class Genero{
    public GEN_CODIGO: number;
    public GEN_NOMBRE: string;
    public GEN_BANNER: string;
    constructor($GEN_CODIGO: number, $GEN_NOMBRE: string, $GEN_BANNER: string){
        this.GEN_CODIGO = $GEN_CODIGO;
        this.GEN_NOMBRE = $GEN_NOMBRE;
        this.GEN_BANNER = $GEN_BANNER;
    }
}