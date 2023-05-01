import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ToggleButton} from "./toggle-button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'd2c-button-toggle',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent {

  data: ToggleButton[] = [];

  @Input() selected: string | undefined = '';

  @Output() selectedChange = new EventEmitter<string>()

  @Input() set items(items: ToggleButton[]) {
    this.data = items;
    this.selected ??= items[0].value ?? '';
  }

  onChangeValue() {
    this.selectedChange.emit(this.selected);
  }
}
