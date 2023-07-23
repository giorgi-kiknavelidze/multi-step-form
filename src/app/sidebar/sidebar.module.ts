import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignSystemModule } from '../design-system/design-system.module';
import { SidebarDesktopComponent } from './sidebar-desktop/sidebar-desktop.component';
import { SidebarMobileComponent } from './sidebar-mobile/sidebar-mobile.component';

@NgModule({
  declarations: [SidebarDesktopComponent, SidebarMobileComponent],
  imports: [CommonModule, DesignSystemModule],
  exports: [SidebarDesktopComponent, SidebarMobileComponent],
})
export class SidebarModule {}
