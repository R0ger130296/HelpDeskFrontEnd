export class CrugerUser {
    public iduser: number;
    public username: string;
    public email: string;
    public password: string;
    public state: number; 
    public totalsessioncounter: number;
    public currentsessioncounter: string;
    constructor($iduser: number, $username: string, $email: string, $password: string,
        $state: number, $totalsessioncounter: number, $currentsessioncounter: string ){
            this.iduser = $iduser;
            this.username = $username;
            this.email = $email;
            this.password = $password;
            this.state = $state;
            this. totalsessioncounter = $totalsessioncounter;
            this. currentsessioncounter = $currentsessioncounter;
        }
}