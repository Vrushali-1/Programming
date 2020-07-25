import {AdminInterface} from './AdminInterface';
export class AdminClass implements AdminInterface{

    name:string;

    constructor(name:string){
          this.name=name;
    }
    
    login(){
        console.log("logged in successfully");
    }

}