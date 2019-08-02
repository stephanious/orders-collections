import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppInputComponent),
      multi: true
    }
  ]
})
export class AppInputComponent implements ControlValueAccessor {

  @Input() value ?= '';
  @Input() name ?= '';

  constructor() {}

  get inputValue() {
    debugger

    return this.value;
  }

  set inputValue(value) {
    debugger
    this.value = value;
    this.propagateChange(this.value);
  }

  propagateChange = (_: any) => {
    debugger

  };

  writeValue(value: any) {
    debugger

    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn) {
    debugger

    this.propagateChange = fn;
  }

  registerOnTouched() {
    debugger

  }
}
