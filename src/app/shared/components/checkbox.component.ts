import {
  Component,
  Input,
  Output,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable:no-forward-ref */
  useExisting: forwardRef(() => CheckboxComponent),
  /* tslint:enable */
  multi: true,
};

@Component({
  selector: 'rio-checkbox',
  providers: [CHECKBOX_VALUE_ACCESSOR],
  template: `
  <input class="absolute o-0"
    style="z-index: -1;"
    [required]="required"
    [checked]="checked"
    [disabled]="disabled"
    [name]="name"
    [tabIndex]="tabindex"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="ariaLabelledby"
    (focus)="onInputFocus()"
    (blur)="onInputBlur()"
    (change)="onInteractionEvent($event)"
    (click)="onInteractionEvent($event)" />
  <rio-icon *ngIf="model" type="checkbox" class="w1 h1 green"></rio-icon>
  <rio-icon *ngIf="!model" type="box" class="w1 h1 moon-gray"></rio-icon>
  `,
  /* tslint:disable:use-host-property-decorator */
  host: {
    class: 'dib mr2 w1 h1 relative',
    style: 'width: 1em; height: 1em;',
    role: 'checkbox',
  },
  /* tslint:enable */
})
export class CheckboxComponent implements ControlValueAccessor {

  /* tslint:disable:no-input-rename */
  @Input('aria-label') ariaLabel: string = '';

  @Input('aria-labelledby') ariaLabelledby: string = null;
  /* tslint:enable */

  @Input() tabindex: number = 0;

  @Input() name: string = null;

  @Input() disabled: boolean = false;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

  isRequired: boolean = false;

  hasFocus: boolean = false;

  @Input() set required(value: boolean) {
    this.isRequired = value != null && `${ value }` !== 'false';
  }

  get required() {
    return this.isRequired;
  }

  model: boolean = false;

  /* tslint:disable:no-empty */
  controlValueAccessorChangeFn: (value: any) => void = (value) => {};
  /* tslint:enable */

  @Input() get checked() {
    return this.model;
  }

  set checked(checked: boolean) {
    if (checked !== this.model) {
      this.model = checked;
    }
  }

  /* tslint:disable:no-empty */
  onTouched: () => any = () => {};
  /* tslint:enable */

  writeValue(value: any) {
    this.model = !!value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  toggle() {
    this.model = !this.model;
  }

  onInputFocus() {
    this.hasFocus = true;
  }

  onInputBlur() {
    this.hasFocus = false;
    this.onTouched();
  }

  emitChangeEvent() {
    this.controlValueAccessorChangeFn(this.model);
    this.change.emit(this.model);
  }

  onInteractionEvent(event: Event) {
    event.preventDefault();

    if (!this.disabled) {
      this.toggle();
      this.emitChangeEvent();
    }
  }
}
