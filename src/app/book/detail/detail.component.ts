import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  label = 'Update Book';
  id = +this.route.snapshot.paramMap.get('id');
  // @ts-ignore
  formUpdate = this.fb.group({
    title: ['', Validators.minLength(6)],
    author: ['', Validators.minLength(6)],
    description: ['']
  });

  constructor(private bookService: BookService, private route: ActivatedRoute, private redirect: Router, private fb: FormBuilder) {
  }

  getInfo() {

    // @ts-ignore
    this.bookService.GetById(this.id).subscribe((res: Observable) => {
      console.log(res);
      try {
        if (res) {
          return this.formUpdate.patchValue({
            title: res.title,
            author: res.author,
            description: res.description,
          });
        }
        throw new Error('Error');
      } catch (e) {
        console.log(e);
      }

    });
  }

  Update() {
    this.bookService.UpdateBook(this.id, this.formUpdate.value).subscribe(res => {
      if (res) {
        this.bookService.showSuccess('Successfully !');
        return this.redirect.navigate(['']);
      }
      this.bookService.showErrors('Errors !');
    });
  }

  ngOnInit() {
    this.getInfo();
  }

}
