export class Persona {
    public PER_CODIGO: number;
    public PER_CEDULA: string;
    public PER_APELLIDO: string;
    public PER_NOMBRE: string;
    public PER_DIRECCION: string;
    public PER_CELULAR: string;
    public PER_TELEFONO: string;
    public PER_CORREO: string;
    public PER_PASSWORD: string;
    public PER_CORREOA: string;
    public ETN_CODIGO: string;
    constructor($PER_CODIGO: number, $PER_CEDULA: string, $PER_APELLIDO: string, $PER_NOMBRE: string,
        $PER_DIRECCION: string, $PER_CELULAR: string, $PER_TELEFONO: string, $PER_CORREO: string,
        $PER_PASSWORD: string, $PER_CORREOA: string, $ETN_CODIGO: string){
            this.PER_CODIGO = $PER_CODIGO;
            this.PER_CEDULA = $PER_CEDULA;
            this.PER_APELLIDO = $PER_APELLIDO;
            this.PER_NOMBRE = $PER_NOMBRE;
            this.PER_DIRECCION = $PER_DIRECCION;
            this.PER_CELULAR = $PER_CELULAR;
            this.PER_TELEFONO = $PER_TELEFONO;
            this.PER_CORREO = $PER_CORREO;
            this.PER_PASSWORD = $PER_PASSWORD;
            this.PER_CORREOA = $PER_CORREOA;
            this.ETN_CODIGO = $ETN_CODIGO;
        }
}