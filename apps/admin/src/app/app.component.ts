import {Component, HostBinding} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {TableComponent} from "@d2c/shared/table";
import {FooterComponent} from "@d2c/common-ui/lib/footer/footer.component";
import {HeaderComponent} from "@d2c/common-ui/lib/header/header.component";
import {ThemeService} from "@d2c/common-ui/lib/theme/theme.service";
import {MenuItems} from "@d2c/common-ui/lib/header/menu-item";


@Component({
  standalone: true,
  imports: [RouterModule, MatButtonModule, TableComponent, FooterComponent, HeaderComponent],
  selector: "d2c-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  @HostBinding('class.light-theme') isDarkMode = true;
  menuItems: MenuItems = [{
    routerLink: 'users', displayedValue: 'users'
  }]

  constructor() {
  }
}
