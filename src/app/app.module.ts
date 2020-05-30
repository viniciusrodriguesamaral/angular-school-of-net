import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee/employee-new-modal/employee-new-modal.component';
import { AlertSucessComponent } from './components/alert-sucess/alert-sucess.component';
import { EmployeeEditModalComponent } from './components/employee/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee/employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';

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
