import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {

  @Input() absCtrl!: AbstractControl; 

errorMessages = [
	{ type: 'required', message: 'required ' },
	{ type: 'minlength', message: 'short' },
	{ type: 'maxlength', message: 'long' },
	{ type: 'pattern', message: 'invalid' },
	{ type: 'email', message: 'invalid email' },
];

  constructor() { }

  ngOnInit(): void {
  }

}
