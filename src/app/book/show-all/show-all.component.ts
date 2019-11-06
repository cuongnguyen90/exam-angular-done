import {Component, OnInit} from '@angular/core';
import {BookService} from '../../service/book.service';
import {InterfaceBook} from '../../interface-book';
import {Observable} from 'rxjs';
import {DialogService} from '../../service/dialog.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  books: InterfaceBook[];
  title = 'List books';
  detail_book: object;

  constructor(
    private bookService: BookService,
    private dialogService: DialogService,
    private redirect: Router) {
  }


  Delete(id: number) {
    this.bookService.GetById(id).subscribe(res => {
      this.detail_book = res;
      this.dialogService.openConfirm('Are you sure ?', 'DELETE', this.detail_book).afterClosed().subscribe(res => {
        if (res) {
          this.bookService.Delete(id).subscribe((response) => {
            this.GetAll();
            return this.bookService.showSuccess(response.message);
          });
        }
      });
    });
    // @ts-ignore
  }

  GetDetail(id: number) {

    this.bookService.GetById(id).subscribe(res => {
      this.detail_book = res;

      this.dialogService.openConfirm('', 'UPDATE', this.detail_book).afterClosed().subscribe(res => {
        if (res) {
          this.redirect.navigate([`/detail/${id}`]);
        }
      });
    });
  }

  GetAll() {
    // @ts-ignore
    this.bookService.GetAll().subscribe((res: Observable) => {

      this.books = res;

    });
  }

  ngOnInit() {
    this.GetAll();

  }

}
