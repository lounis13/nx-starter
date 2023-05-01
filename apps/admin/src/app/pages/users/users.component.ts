import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonToggleComponent} from "@d2c/shared/button-toggle/button-toggle.component";
import {ToggleButton} from "@d2c/shared/button-toggle/toggle-button";
import {MatExpansionModule} from "@angular/material/expansion";

@Component({
  selector: 'd2c-users',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent, MatExpansionModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent {
  selected: string | undefined;

  items: ToggleButton[] = [
    {
      displayedValue: 'Yasmine ACHIR', value: 'yasmine', icon: 'woman'
    },
    {
      displayedValue: 'Lounis BOULDJA', value: 'lounis', icon: 'man'
    }
  ]
}
