import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Create new book';
  formCreate: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private route: Router, private bookService: BookService) {
  }

  CreateUser() {
    this.bookService.CreateBook(this.formCreate.value).subscribe((res) => {
      if (res) {
        this.bookService.showSuccess('Successfully !');
        return this.route.navigate(['']);
      }
      this.bookService.showErrors('Errors !');
    });
  }

  ngOnInit() {
    this.formCreate = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['']
    });
  }

}
