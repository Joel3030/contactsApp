import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  formGroupContact!: FormGroup;
  editMode = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactsService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();

    this.route.paramMap.subscribe({
      next: (parameterMap) => {
        const id = parameterMap.get('id') as string;

        if (id) {
          this.getContact(id);
          this.editMode = true;
          this.id.disable();
        }
      },
    });
  }

  getContact(id: string) {
    const contacts = this.contactsService.getContacts();

    const contact = contacts.find((item: any) => item.id === id);

    if (contact) {
      for (let i = 1; i < contact.telephones.length; i++) {
        this.addTelephone();
      }

      this.formGroupContact.patchValue(contact);
    }
  }

  addTelephone() {

    if (this.telephones.invalid) {
      return Object.values(this.telephones.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }

    this.telephones.push(this.formBuilder.control('', [Validators.required, Validators.minLength(10)]));
  }

  removeTelephone(index: number) {
    this.telephones.removeAt(index);
  }

  saveContact() {
		if (this.formGroupContact.invalid) {
			return Object.values(this.formGroupContact.controls).forEach((control) => {
				control.markAllAsTouched();
			});
		}

    this.contactsService.postContact(this.formGroupContact.value);
    this.goBack();
  }

  updateContact() {
    		if (this.formGroupContact.invalid) {
			return Object.values(this.formGroupContact.controls).forEach((control) => {
        control.markAllAsTouched();
			});
		} 

     this.contactsService.putContact(this.formGroupContact.getRawValue());
     this.goBack();
  }

  cancel() {
    if (
      confirm('Are you sure you want to cancel?')
    ) {
      this.goBack();
    }

  }
  goBack() {
        this.router.navigate(['/contacts']);
  }


  private createForm() {
    this.formGroupContact = this.formBuilder.group({
      id: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required ,Validators.email]],
      telephones: this.formBuilder.array([
        this.formBuilder.control('',[Validators.required, Validators.minLength(10)]),
      ]),
    });
  }

  
  get id() {
    return this.formGroupContact.get('id') as AbstractControl;
  }

  get firstName() {
    return this.formGroupContact.get('firstName') as AbstractControl;
  }

  get lastName() {
    return this.formGroupContact.get('lastName') as AbstractControl;
  }

  get email() {
    return this.formGroupContact.get('email') as AbstractControl;
  }

  get telephones() {
    return this.formGroupContact.get('telephones') as FormArray;
  }
}
