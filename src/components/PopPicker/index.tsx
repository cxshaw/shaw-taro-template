import { Picker, Popup } from '@taroify/core';
import { PickerProps } from '@taroify/core/picker/picker';
import React, { FC } from 'react';

import { OptionKey, OptionValue } from '@/@types/component';
import { getPickerColumns } from '@/utils/component';

interface IPicker extends PickerProps {
  isOpen: boolean;
  title?: string;
  maps: Map<OptionKey, OptionValue>;
  onCancel: () => void;
  onConfirm: (val: any | any[]) => void;
}

const PopPicker: FC<IPicker> = (props) => {
  const { title, isOpen, maps, onConfirm, onCancel, ...rest } = props;

  return (
    <Popup open={isOpen} rounded placement="bottom" onClose={onCancel}>
      <Popup.Backdrop />
      <Picker onCancel={onCancel} onConfirm={onConfirm} {...rest}>
        <Picker.Toolbar>
          <Picker.Button>取消</Picker.Button>
          {title ? <Picker.Title>{title}</Picker.Title> : null}
          <Picker.Button>确认</Picker.Button>
        </Picker.Toolbar>
        <Picker.Column>{getPickerColumns(maps)}</Picker.Column>
      </Picker>
    </Popup>
  );
};

export default PopPicker;
