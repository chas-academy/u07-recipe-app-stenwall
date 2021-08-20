import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header-xs',
  templateUrl: './header-xs.component.html',
  styleUrls: ['./header-xs.component.scss']
})
export class HeaderXsComponent implements OnInit {
  data: any;

  constructor(
    private route: ActivatedRoute,
    private navigation: NavigationService
  ) { }

  ngOnInit(): void {
    this.data = this.route.data;
  }

  back(): void {
    this.navigation.back();
  }
}
