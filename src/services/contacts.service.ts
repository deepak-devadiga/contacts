import { ContactModel } from "../model/contact-model";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService{
    
    private contacts: ContactModel[] =[];
    private favorites: ContactModel[] = [];

    addContact(firstName: string, lastName: string, gender: string, phoneNumber: number, email: string){
        this.contacts.push(new ContactModel(firstName, lastName, gender, phoneNumber, email));
        console.log(this.contacts)
    }

    getContacts(){
        console.log(this.contacts)
        return this.contacts.slice();
    }

    deleteContact(index: number){
        this.contacts.splice(index, 1);
    }

    addFavorites(index: number){
        this.favorites.push(this.contacts[index]);
    }

    getAllFavorites(){
        return this.favorites.slice();
    }

    removeFavorite(index: number){
        this.favorites.splice(index, 1);
    }

}