import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact/:id', component: ContactComponent },
  	{
		path: '',
		redirectTo: 'contacts',
		pathMatch: 'full',
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
