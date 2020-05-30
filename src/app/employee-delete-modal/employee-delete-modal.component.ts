import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {Employee, EmployeeService} from '../employee.service';

declare const $;

@Component({
  selector: 'employee-delete-modal',
  templateUrl: './employee-delete-modal.component.html',
  styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

  @Input()
  employee : Employee;

  @Output()
  onDestroy: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor( private element: ElementRef, private employeeService: EmployeeService ) { }

  ngOnInit(): void {
  }

  destroy(){
    const copy = Object.assign({}, this.employee)
    this.employeeService.destroyEmployee(this.employee);
    this.onDestroy.emit(copy);
    this.hide();
  }

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }

  private getDivModal(): HTMLElement  {
    const nativeElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }
}
