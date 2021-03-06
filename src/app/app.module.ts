import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShowAllComponent} from './book/show-all/show-all.component';
import {HeaderComponent} from './layouts/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {DetailComponent} from './book/detail/detail.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ReactiveFormsModule} from '@angular/forms';
import {CreateComponent} from './book/create/create.component';
import { ConfirmDailogComponent } from './shared/confirm-dailog/confirm-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
    HeaderComponent,
    DetailComponent,
    CreateComponent,
    ConfirmDailogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatListModule,
    // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDailogComponent, ShowAllComponent],
})
export class AppModule {
}
