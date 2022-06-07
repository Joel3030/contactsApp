import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactsService } from '../../services/contacts.service';

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
  }

  goToContact(id?: any) {
    this.router.navigate(['/contact', id ? id : '']);
  }
}
