import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit {
  currentToggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setmenu(value: any) {
    this.currentToggle = value;
  }
}
