import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextService } from './inpute-text.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  userForm!: FormGroup;
  students: any = [];

  constructor(private formBuilder: FormBuilder, private service: InputTextService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((success) => {
      this.students = success;
    });
    this.userForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      course: ['', [Validators.required]]
    });
  }

  onSubmitForm(): void {
    console.log(this.userForm.value);
    const data = {
      "name": this.userForm.value.name,
      "birthday": this.userForm.value.dob,
      "gender": Number(this.userForm.value.gender),
      "course": {
        "id": Number(this.userForm.value.course)
      }
    }
    if (this.userForm.value.id) {
      this.service.put(this.userForm.value.id, data).subscribe((e: any) => {
        this.toastr.success('Update Student successfully!');
        this.service.getAll().subscribe((success) => {
          this.students = success;
          this.userForm.reset();
        });
        // this.close();
        // this.spinner.hide();
      }, (error: any) => {
        // this.spinner.hide();
      })
    } else {
      this.service.post(data).subscribe((e: any) => {
        this.toastr.success('Create Student successfully!');
        this.service.getAll().subscribe((success) => {
          this.students = success;
          this.userForm.reset();
        });
        // this.close();
        // this.spinner.hide();
      }, (error: any) => {
        // this.spinner.hide();
      })
    }
  }

  delete(id: any) {
    this.service.delete(id).subscribe((e: any) => {
      this.toastr.success('Delete Student successfully!');
      this.service.getAll().subscribe((success) => {
        this.students = success;
      });
      // this.close();
      // this.spinner.hide();
    }, (error: any) => {
      // this.spinner.hide();
    })
  }
}
