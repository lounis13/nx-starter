import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItems} from "@d2c/common-ui/lib/header/menu-item";
import {CdkTableModule} from "@angular/cdk/table";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'd2c-navbar',
  standalone: true,
  imports: [CommonModule, CdkTableModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  @Input() menuItems: MenuItems = [];

  toggleNavBar(primaryNavigation: HTMLUListElement, buttonSwitcher: HTMLButtonElement) {
    const dataVisible = 'data-visible';
    const ariaExpanded = 'aria-expanded';
    const isVisible = primaryNavigation.getAttribute(dataVisible) === 'true';
    primaryNavigation.setAttribute(dataVisible, JSON.stringify(!isVisible));
    buttonSwitcher.setAttribute(ariaExpanded, JSON.stringify(!isVisible));
  }
}
