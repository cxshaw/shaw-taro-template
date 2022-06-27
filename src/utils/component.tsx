import { DropdownMenu, Picker, Radio } from '@taroify/core';
import React from 'react';

import { OptionKey, OptionValue } from '@/@types/component';

// 1 输入框，2 选择器
type FORM_TYPE = 1 | 2;

// 必填规则
export const getRequiredRule = (label: string, type: FORM_TYPE) => ({
  required: true,
  message: `请${type === 1 ? '输入' : '选择'}${label}`,
});

export const getRadioColumns = (options: Map<OptionKey, OptionValue>) =>
  Array.from(options).map((o) => <Radio name={o[0]}>{o[1]}</Radio>);

export const getPickerColumns = (options: Map<OptionKey, OptionValue>) =>
  Array.from(options).map((o) => <Picker.Option>{o[1]}</Picker.Option>);

export const getDropColumns = (options: Map<OptionKey, OptionValue>) =>
  Array.from(options).map((o) => (
    <DropdownMenu.Option value={o[0]}>{o[1]}</DropdownMenu.Option>
  ));
