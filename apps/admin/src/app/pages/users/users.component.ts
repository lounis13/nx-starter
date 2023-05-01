import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonToggleComponent} from "@d2c/shared/button-toggle/button-toggle.component";
import {ToggleButton} from "@d2c/shared/button-toggle/toggle-button";
import {MatExpansionModule, MatExpansionPanel} from "@angular/material/expansion";
import {CdkAccordionModule} from "@angular/cdk/accordion";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'd2c-users',
  standalone: true,
  imports: [CommonModule, ButtonToggleComponent, MatExpansionModule, CdkAccordionModule, MatIconModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  selected: string | undefined;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  data: ToggleButton[] = [
    {
      displayedValue: 'Yasmine ACHIR', value: 'yasmine', icon: 'woman'
    },
    {
      displayedValue: 'Lounis BOULDJA', value: 'lounis', icon: 'man'
    },
  ]

  navigate(item: string) {
    console.log(item)
  }

  preventExpansion(event: Event, panel: MatExpansionPanel) {
    panel.close();
  }
}
