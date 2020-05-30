import { Component, ElementRef, OnInit, Output, EventEmitter} from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '' ,
    salario: 0,
    bonus: 0,
  };

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private element: ElementRef, private employeeService: EmployeeService ) { }

  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal(): HTMLElement  {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }

  addEmployee(){
    const copy = Object.assign( {}, this.employee );
    this.employeeService.addEmployee( copy );
    this.onSubmit.emit(copy);
    this.hide();
  }

  hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

}

