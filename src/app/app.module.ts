import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import { SalaryColorDirective } from './salary-color.directive';
import { EmployeeNewModalComponent } from './employee-new-modal/employee-new-modal.component';
import { AlertSucessComponent } from './alert-sucess/alert-sucess.component';
import { EmployeeEditModalComponent } from './employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './my-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    AlertSucessComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    MyCurrencyPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
