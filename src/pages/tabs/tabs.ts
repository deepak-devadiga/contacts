import { Component } from '@angular/core';
import { ContactsPage } from '../contacts/contacts';
import { FavoritesPage } from '../favorites/favorites';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  contacts = ContactsPage;
  favorites = FavoritesPage;
}
