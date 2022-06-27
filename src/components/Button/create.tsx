import { FixedView, Space } from '@taroify/core';
import { Text, View, ViewProps } from '@tarojs/components';
import React, { FC } from 'react';

import './index.less';

interface ICreateButton extends ViewProps {
  text?: string;
}

const CreateButton: FC<ICreateButton> = (props) => {
  const { onClick, text = '新增' } = props;
  return (
    <FixedView
      position="bottom"
      safeArea="bottom"
      align="center"
      onClick={onClick}
    >
      <Space justify="center">
        <View className={'create-button'} onClick={onClick}>
          <Text className={'create-button-text'}>{text}</Text>
        </View>
      </Space>
    </FixedView>
  );
};

export default CreateButton;
