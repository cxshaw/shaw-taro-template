import { ITouchEvent, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { FC } from 'react';

interface ICallPhone {
  onSuccess?: () => void;
  onFail?: () => void;
  phoneNumber: string;
}

const CallPhone: FC<ICallPhone> = (props) => {
  const { children, onSuccess, onFail, phoneNumber } = props;

  const handleCall = (event: ITouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    Taro.makePhoneCall({
      phoneNumber,
      success: () => {
        if (typeof onSuccess === 'function') {
          onSuccess();
        }
      },
      fail: () => {
        if (typeof onFail === 'function') {
          onFail();
        }
      },
    });
  };

  return <View onClick={handleCall}>{children}</View>;
};

export default CallPhone;
