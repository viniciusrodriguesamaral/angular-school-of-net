import { Component, OnInit , ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  employeeToEdit: Employee;
  showMessageSuccess = false;
  employeeToDelete: Employee;

  @ViewChild(EmployeeNewModalComponent)
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent)
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent)
  employeeDeleteModal: EmployeeDeleteModalComponent;

  constructor( public employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  openNewModal(){
    this.employeeNewModal.show();
  }

  openEditModal( employee: Employee ){
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  openDestroyModal( employee: Employee ){
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  getSalarioColor( employee){
    return employee.salario > 20000 ? 'green' : 'red';
  }

  onNewEmployee( employee: Employee ){
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee( employee: Employee ){
    console.log(employee);
  }

  onDestroyEmployee(employee: Employee){
    console.log(employee);
  }

}
