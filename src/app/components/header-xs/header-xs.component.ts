import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-xs',
  templateUrl: './header-xs.component.html',
  styleUrls: ['./header-xs.component.scss']
})
export class HeaderXsComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.data = data));
  }

}
