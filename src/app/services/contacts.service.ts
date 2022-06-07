import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from '../models/contact.model';
import contactList from '../../assets/JSON/contactsAPI.json';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: IContact[] = [];

  constructor() {}

  getContacts() {
    if (!localStorage.getItem('contacts')) {
      this.contacts = contactList;
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
    } else {
      this.contacts = JSON.parse(localStorage.getItem('contacts') as string);
    }

    return this.contacts;
  }

  postContact(contact: IContact) {
    let contacts: IContact[] = [];

    if (!localStorage.getItem('contacts')) {
      contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      contacts = JSON.parse(localStorage.getItem('contacts') as string);
      contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  putContact(contact: IContact) {
    let contacts: IContact[] = [];
    contacts = JSON.parse(localStorage.getItem('contacts') as string);
    const findOne = contacts.findIndex((obj) => obj.id == contact.id);
    contacts[findOne] = contact;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
}
