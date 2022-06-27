import { CSSProperties, ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export interface Pagination {
  total: number;
  size: number;
  index: number;
  length: number;
  beginIndex: number;
  endIndex: number;
}

export interface BaseResponse {
  code: string;
  msg: string;
  memo: string;
  data: any;
  pagination?: Pagination;
  result: number;
  success: boolean;
  requestId: string;
  linkTime: number;
}
