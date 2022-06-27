import { Empty } from '@taroify/core';
import React, { FC } from 'react';

interface IUniEmpty {
  src?: string;
  text?: string;
}

const UniEmpty: FC<IUniEmpty> = (props) => {
  const { src = '', text = '暂无数据' } = props;
  return (
    <Empty>
      <Empty.Image src={src} />
      <Empty.Description>{text}</Empty.Description>
    </Empty>
  );
};

export default UniEmpty;
