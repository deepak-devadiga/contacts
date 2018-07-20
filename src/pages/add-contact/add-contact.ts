import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../../services/contacts.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  constructor(private contactService: ContactService, private navCtrl: NavController){

  }

  onSubmit(form: NgForm){
    console.log(form.value)
    this.contactService.addContact(form.value.firstName, form.value.lastName, form.value.gender, form.value.phoneNumber, form.value.email);
    form.reset();
    this.navCtrl.pop();
  }

}
