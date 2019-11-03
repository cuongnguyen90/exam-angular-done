import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Create new user';
  formCreate = this.fb.group({
    name: [''],
    username: [''],
    email: ['']
  });

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private route: Router, private userServices: ProductService) {
  }

  CreateUser() {
    this.userServices.addUser(this.formCreate.value).subscribe((res) => {
      this.userServices.showSuccess(res.message);
      return this.route.navigate(['']);
    });
  }

  ngOnInit() {
  }

}
