import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rf',
  templateUrl: './rf.component.html',
  styleUrls: ['./rf.component.scss']
})
export class RfComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[abc]')]],
      lastName: [''],
      age: [''],
      gender: [''],
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.reactiveForm.get('firstName'));
  }

}
