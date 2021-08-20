import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.data;
  }

  // DELETE IF WORKING:
  // receivePreferences(event) {
  //   this.preferences = event;
  // }

  // consts:
  // title = 'Parsley & Sage';
  // preferences: object;
}
