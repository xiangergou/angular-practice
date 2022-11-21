import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, FormGroup, NG_VALIDATORS } from '@angular/forms';

/**
 * 跨字段验证
 * @param controlGroup 控件组
 */
const nameAgeCrossValidator = (controlGroup: AbstractControl): ValidationErrors | null => {

  // 获取子控件的信息
  //
  const name = controlGroup.get('name');
  const gender = controlGroup.get('gender');

  return name && gender && name.value === 'yun' && gender.value === 'false' ? { 'nameAgeInvalid': true } : null;
};

@Directive({
  selector: '[appCrossFieldValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldValidateDirective, multi: true }]
})
export class CrossFieldValidateDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameAgeCrossValidator(control);
  }
}