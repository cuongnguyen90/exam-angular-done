import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ConfirmDailogComponent} from '../shared/confirm-dailog/confirm-dailog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  // tslint:disable-next-line:variable-name
  openConfirm(msg, _title) {
    return this.dialog.open(ConfirmDailogComponent, {˚
      width: '390px',
      data: {
        message: msg,
        title: _title,
      }
    });
  }
}
