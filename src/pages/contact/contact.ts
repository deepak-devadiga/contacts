import { Component } from '@angular/core';
import { NavParams, NavController, AlertController, ToastController } from 'ionic-angular';
import { ContactModel } from '../../model/contact-model';
import { ContactService } from '../../services/contacts.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contact: ContactModel;
  index: number;

  constructor(private navParams: NavParams, private contactsService: ContactService, private navCtrl: NavController,
              private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewWillLoad() {
    this.contact =  this.navParams.data.selectedContact;
    this.index = this.navParams.get('index');
  }

  onAddFavorite(){
    this.contactsService.addFavorites(this.index);
    this.showToast('Contact added to Favorites!');
    this.navCtrl.popToRoot();
  }


  showToast(msg: string){
    const toast = this.toastCtrl.create({
      message:msg,
      duration: 1500
    })
    toast.present();
  }

  onDelete(){

    const alert = this.alertCtrl.create({
      title: 'Are you sure to delete?',
      subTitle: 'Are you sure to delete this contact?',
      buttons: [
        {
          text: 'Delete',
          handler: () => {
            this.contactsService.deleteContact(this.index);
            this.showToast('Contact Deleted!');
            this.navCtrl.popToRoot();
          } 
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    alert.present();
    
  }

  editContact(){
    
  }

}
