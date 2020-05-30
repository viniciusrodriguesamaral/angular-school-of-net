import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salario: number;
  bonus: number;

}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() { }

  addEmployee(employee: Employee){
    this.employees.push( employee );
  }
  destroyEmployee( employee: Employee ){
    const index =  this.employees.indexOf(employee);
    this.employees.splice(index, 1 );
  }


}
