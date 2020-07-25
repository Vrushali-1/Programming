import {menuInterface} from './menuInterface';

export class MenuClass implements menuInterface{

    addMenu(){
        console.log("inside add menu");
    }

    editMenu(){
        console.log("inside edit menu");
    }

    deleteMenu(){
        console.log("inside delete menu");
    }
      
}