import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddContactPage } from '../add-contact/add-contact';
import { ContactModel } from '../../model/contact-model';
import { ContactService } from '../../services/contacts.service';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage{

  contacts: ContactModel[] = [];

  constructor(private navCtrl: NavController, private contactService: ContactService){
    
  }

  ionViewWillEnter(){
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts)
  }

  onAddContact(){
    this.navCtrl.push(AddContactPage)
  }

  onViewContact(contact: ContactModel, index: number){
    let selectedContact = {
                              firstName: contact.firstName,
                              lastName: contact.lastName,
                              gender: contact.gender,
                              phoneNumber: contact.phoneNumber,
                              email: contact.email
                            }
    this.navCtrl.push(ContactPage, {selectedContact: selectedContact, index: index});
  }
}
