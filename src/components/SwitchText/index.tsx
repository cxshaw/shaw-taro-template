import { ITouchEvent, Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { FC, useEffect, useState } from 'react';

import './index.less';

interface ISwitchOption {
  label: string;
  value: string | number;
}

interface ISwitchText {
  options: ISwitchOption[];
  value: string | number;
  onChange: Function;
}

const SwitchText: FC<ISwitchText> = (props) => {
  const { options, value, onChange } = props;
  const [state, setState] = useState(value || options[0].value);

  const handleChange = (event: ITouchEvent) => {
    event.stopPropagation();
    event.preventDefault();
    const newVal =
      options.find((o) => o.value !== state)?.value || options[0].value;
    setState(newVal);
    if (typeof onChange === 'function') {
      onChange(newVal);
    }
  };

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <View className="switch-text" onClick={handleChange}>
      {options.map((o, i) => (
        <Text
          className={
            state !== o.value
              ? 'switch-text-item switch-text-hide'
              : 'switch-text-item'
          }
          key={o.value}
          style={{
            marginLeft:
              state !== o.value && i === 0 ? Taro.pxTransform(6, 750) : 0,
            marginRight:
              state !== o.value && i === 1 ? Taro.pxTransform(6, 750) : 0,
          }}
        >
          {o.label}
        </Text>
      ))}
    </View>
  );
};

export default SwitchText;
