import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeService} from "@d2c/common-ui/lib/theme/theme.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NavbarComponent} from "@d2c/common-ui/lib/header/navbar/navbar.component";
import {MenuItems} from "@d2c/common-ui/lib/header/menu-item";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'd2c-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, NavbarComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() menuItems: MenuItems = [];

  constructor(private readonly _themeService: ThemeService) {
  }

  toggleDarkMode(): void {
    this._themeService.toggleDarkMode();
  }

}
