export class User {
    name: string;
    username: string;
    email: string;
    phone: string;
    password:string;
    // dob: string;
    // gender: string;
    // role: string;
    constructor(details: any) {
        this.name = details.name || '';
        this.username = details.username || '';
        this.email = details.email || '';
        this.phone = details.phone || '';
        this.password = details.password || '';
        // this.gender = details.gender || '';
        // this.role = details.role || '';
    }
}