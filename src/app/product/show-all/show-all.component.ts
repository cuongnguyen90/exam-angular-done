import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {InterfaceUser} from '../../interface-user';
import {Observable} from 'rxjs';
import {DialogService} from '../../service/dialog.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {
  users: InterfaceUser[];
  title = 'List users';

  constructor(
    private userService: ProductService,
    private dialogService: DialogService) {
  }


  Delete(id: number) {
    this.dialogService.openConfirm('Are you sure ?', 'DELETE').afterClosed().subscribe(res => {
      if (res) {
        this.userService.Delete(id).subscribe((response) => {
          this.GetAll();
          return this.userService.showSuccess(response.message);
        });
      }
    });
  }

  GetAll() {
    // @ts-ignore
    this.userService.GetAll().subscribe((res: Observable) => {
      if (res.status) {
        this.users = res.data;
      }
    });
  }

  ngOnInit() {
    this.GetAll();

  }

}
