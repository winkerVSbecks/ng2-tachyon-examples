import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {

  checkboxFormModel = {};

  submitCheckboxForm(form: NgForm) {
    console.log(form.value);
  }
}
