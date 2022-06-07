import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';
import { IContact } from '../../models/contact.model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: any = [];

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getContants();
  }

  getContants() {
    this.contacts = this.contactsService.getContacts();
    console.log(this.contacts);
  }

  goToContact(id?: any) {
    this.router.navigate(['/contact', id ? id : '']);
  }

  deleteContact(contact: IContact) {
    if (
      confirm('Are you sure you want to delete this contact into the database?')
    ) {
      this.contactsService.deleteContact(contact);
    }
  }

  reset() {
    if (
      confirm('Are you sure you want to reset all the database?')
    ) {
      this.contactsService.reset();
      this.getContants();
    }
  }
}
