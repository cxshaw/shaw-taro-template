import { AreaPicker, Popup } from '@taroify/core';
import { AreaPickerProps } from '@taroify/core/area-picker/area-picker';
import { PickerOptionObject } from '@taroify/core/picker';
import { AreaData } from '@taroify/hooks/use-area/area.shared';
import { areaList } from '@vant/area-data';
import React, { FC } from 'react';

interface IPopAreaPicker extends AreaPickerProps {
  isOpen: boolean;
  title?: string;
  onCancel: () => void;
  onConfirm: (val: any[], opts: PickerOptionObject[]) => void;
  areas?: AreaData;
}

const PopAreaPicker: FC<IPopAreaPicker> = (props) => {
  const {
    title,
    isOpen,
    onConfirm,
    onCancel,
    areas = areaList,
    ...rest
  } = props;

  return (
    <Popup open={isOpen} rounded placement="bottom" onClose={onCancel}>
      <AreaPicker onConfirm={onConfirm} onCancel={onCancel} {...rest}>
        <AreaPicker.Toolbar>
          <AreaPicker.Button>取消</AreaPicker.Button>
          {title ? <AreaPicker.Title>{title}</AreaPicker.Title> : null}
          <AreaPicker.Button>确认</AreaPicker.Button>
        </AreaPicker.Toolbar>
        <AreaPicker.Columns>{areas}</AreaPicker.Columns>
      </AreaPicker>
    </Popup>
  );
};

export default PopAreaPicker;
