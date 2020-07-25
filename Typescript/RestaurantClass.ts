import {RestaurantInterface} from './RestaurantInterface';

export class RestaurantClass implements RestaurantInterface{
    add(){
        console.log("inside add function od restaurant");
    }

    delete(){
        console.log("inside delete function of restaurant ");
    }

    edit(){
        console.log("inside edit functionn of restaurant");
    }
}