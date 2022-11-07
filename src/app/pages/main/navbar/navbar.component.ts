import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleStatus = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  setToggleMenu(value: any) {
    this.toggleStatus.emit(value);
    // console.log(value);
  }
}
