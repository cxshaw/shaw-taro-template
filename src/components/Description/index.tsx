import { Flex } from '@taroify/core';
import { FlexItemProps, FlexProps } from '@taroify/core/flex';
import { View } from '@tarojs/components';
import React, { FC, ReactNode, useMemo } from 'react';

import './index.less';

interface IDescription extends FlexProps {
  label: string;
  content: ReactNode;
  colon?: boolean;
  labelProps?: FlexItemProps;
  contentProps?: FlexItemProps;
}

const Description: FC<IDescription> = (props) => {
  const {
    label,
    content,
    colon = false,
    labelProps,
    contentProps,
    ...rest
  } = props;

  const flexLabelProps = useMemo(
    () => (labelProps ? { ...labelProps } : {}),
    [labelProps],
  );

  const flexContentProps = useMemo(
    () => (contentProps ? { ...contentProps } : {}),
    [contentProps],
  );

  return (
    <Flex {...rest}>
      <Flex.Item {...flexLabelProps}>
        <View className="description-label">
          {label}
          {colon ? ':' : ''}
        </View>
      </Flex.Item>
      <Flex.Item {...flexContentProps}>
        <View className="description-content">{content}</View>
      </Flex.Item>
    </Flex>
  );
};

export default Description;
