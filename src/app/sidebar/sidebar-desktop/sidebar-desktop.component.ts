import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-desktop',
  templateUrl: './sidebar-desktop.component.html',
  styleUrls: ['./sidebar-desktop.component.css'],
})
export class SidebarDesktopComponent {
  @Input()
  currentStep = 0;

  steps = ['YOUR INFO', 'SELECT YOUR PLAN', 'ADD-ONS', 'SUMMARY'];
}
