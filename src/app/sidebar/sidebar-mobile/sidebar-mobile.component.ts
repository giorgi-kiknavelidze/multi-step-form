import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.css'],
})
export class SidebarMobileComponent {
  steps = [0, 1, 2, 3];

  @Input()
  currentStep = 0;
}
