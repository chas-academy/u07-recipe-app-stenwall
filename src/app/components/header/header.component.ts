import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() data: any;
  title: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.data;
  }
}
