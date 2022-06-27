import { Button, ConfigProvider, FixedView } from '@taroify/core';
import { ButtonProps } from '@taroify/core/button';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { FC } from 'react';

import './index.less';

interface IBottomButton extends ButtonProps {
  text: string;
}

const BottomButton: FC<IBottomButton> = (props) => {
  const { text, ...rest } = props;
  return (
    <FixedView position="bottom" align="center" style={{ zIndex: 10 }}>
      <View className={'bottom-button'}>
        <ConfigProvider
          theme={{
            'button-border-radius': Taro.pxTransform(6, 750),
            'button-border-radius-max': Taro.pxTransform(6, 750),
            'button-height-large': Taro.pxTransform(96, 750),
          }}
        >
          <Button
            shape="round"
            color="primary"
            formType="submit"
            size="large"
            style={{ backgroundColor: 'rgba(34,40,224,1)' }}
            {...rest}
          >
            {text}
          </Button>
        </ConfigProvider>
      </View>
    </FixedView>
  );
};

export default BottomButton;
