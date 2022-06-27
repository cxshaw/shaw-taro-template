import { DatetimePicker, Popup } from '@taroify/core';
import { DatetimePickerProps } from '@taroify/core/datetime-picker/datetime-picker';
import React, { FC } from 'react';

interface IPopDatePicker extends DatetimePickerProps {
  isOpen: boolean;
  title?: string;
  onCancel: () => void;
  onConfirm: (val: Date) => void;
}

const PopDatePicker: FC<IPopDatePicker> = (props) => {
  const { title, isOpen, onConfirm, onCancel, ...rest } = props;

  return (
    <Popup open={isOpen} rounded placement="bottom" onClose={onCancel}>
      <DatetimePicker onConfirm={onConfirm} onCancel={onCancel} {...rest}>
        <DatetimePicker.Toolbar>
          <DatetimePicker.Button>取消</DatetimePicker.Button>
          {title ? <DatetimePicker.Title>{title}</DatetimePicker.Title> : null}
          <DatetimePicker.Button>确认</DatetimePicker.Button>
        </DatetimePicker.Toolbar>
      </DatetimePicker>
    </Popup>
  );
};

export default PopDatePicker;
