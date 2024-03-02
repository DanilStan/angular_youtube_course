import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {
  toggle = true;

  constructor() {}

  onClick() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {}
}
