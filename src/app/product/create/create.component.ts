import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'Create new user';
  formCreate: FormGroup;

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private route: Router, private userServices: ProductService) {
  }

  CreateUser() {
    this.userServices.addUser(this.formCreate.value).subscribe((res) => {
      if (res.status) {
        this.userServices.showSuccess(res.message);
        return this.route.navigate(['']);
      }
      this.userServices.showErrors(res.message);
    });
  }

  ngOnInit() {
    this.formCreate = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email]
    });
  }

}
