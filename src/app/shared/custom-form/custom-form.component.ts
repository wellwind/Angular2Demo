import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { forwardRef, Component, OnInit } from '@angular/core';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomFormComponent),
  multi: true
};

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class CustomFormComponent implements OnInit, ControlValueAccessor {
  isDisabled = false;
  user = {
    username: '',
    password: ''
  };

  get username() {
    return this.user.username;
  }

  set username(value) {
    this.user.username = value;
    if (this.onChanged) {
      this.onChanged(this.user);
    }
  }

  get password() {
    return this.user.password;
  }

  set password(value) {
    this.user.password = value;
    if (this.onChanged) {
      this.onChanged(this.user);
    }

  }

  onChanged: (user: any) => {};
  onTouched: () => {};

  constructor() {
  }

  ngOnInit() {
  }

  writeValue(user: any): void {
    // 外層ngModel資料變時如何變更我們內部的資料
    if (user) {
      this.username = user.username;
      this.password = user.password;
    }
  }

  registerOnChange(fn: any): void {
    // 資料變更時呼叫ngModel傳來的function
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // 當使用customize component並設定disabled=true時內部的實做
    this.isDisabled = isDisabled;
  }

}
