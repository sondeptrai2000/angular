import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class inputComponent implements OnInit {
  title = 'my-app';
  Name= null;
  age= null;
  birthDay= null;
  constructor() {}

  ngOnInit(): void {
  }

  Submit() {
    let Name = this.Name;
    let age = this.age;
    let birthDay =this.birthDay;
    alert(
      'Thông tin vừa nhập: Tên: ' +
        Name +
        '\n Tuổi: ' +
        age +
        '\n Ngày sinh: ' +
        birthDay
    );
  }
}
