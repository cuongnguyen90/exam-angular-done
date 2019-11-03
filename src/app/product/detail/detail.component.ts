import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title = 'Update User';
  // @ts-ignore
  formUpdate = this.fb.group({
    name: ['', Validators.minLength(6)],
    username: ['', Validators.minLength(6)],
    email: ['', Validators.required]
  });

  constructor(private serviceUser: ProductService, private route: ActivatedRoute, private fb: FormBuilder) {
  }

  getInfo() {
    const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.serviceUser.GetById(+id).subscribe((res: Observable) => {
      try {
        if (res.status) {
          return this.formUpdate.patchValue({
            name: res.data.name,
            username: res.data.username,
            email: res.data.email
          });
        }
        throw new Error('Error');
      } catch (e) {
        console.log(e);
      }

    });
  }

  ngOnInit() {
    this.getInfo();
  }

}
