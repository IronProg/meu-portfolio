import {Component, OnInit} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent} from 'ng-zorro-antd/layout';
import {NzBreadCrumbComponent} from 'ng-zorro-antd/breadcrumb';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {NavigationEnd, NavigationStart, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzBreadCrumbComponent,
    NzMenuItemComponent,
    NzMenuDirective,
    RouterLink
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
    layoutImgUrl: string = "https://avatars.githubusercontent.com/u/61606251?v=4";
    activeRoute: string = "";
    constructor(private router: Router) { }

  ngOnInit(): void {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.activeRoute = event.url;
        }
      })
  }
}
