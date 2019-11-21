import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private employeeservice: EmployeeService) { }

  employees: Employee[]

  ngOnInit() {
    this.employeeservice.getEmployee().subscribe((response: Employee[]) => {
      this.employees = response
      console.log(this.employees)
    })
  }

}
