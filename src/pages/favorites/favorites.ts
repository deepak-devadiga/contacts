import { Component } from '@angular/core';
import { ContactService } from '../../services/contacts.service';
import { ContactModel } from '../../model/contact-model';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  favorites: ContactModel[] = [];
  index: number;

  constructor(private contactsService: ContactService){

  }

  ionViewWillEnter(){
    this.favorites = this.contactsService.getAllFavorites();
  }

  onRemoveFavorite(index: number){
    this.contactsService.removeFavorite(index);
  }
}
