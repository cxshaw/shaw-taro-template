// import Taro, {
//   hideLoading,
//   showLoading,
//   usePullDownRefresh,
//   useReachBottom,
// } from '@tarojs/taro';
// import omit from 'lodash.omit';
// import { useEffect, useMemo, useRef, useState } from 'react';
//
// const getRefreshTemp = () => {
//   return new Date().getTime();
// };
//
// interface useListProps {
//   getList: (filter: any) => Promise<any>;
//   filterInit?: any;
//   disabled?: boolean;
//   isLoadFirst?: boolean;
//   refreshExt?: () => void;
// }
//
// interface loadInfo {
//   page: number;
//   type: string;
//   filter: any;
//   refreshTemp: number;
// }
//
// export default function useList({
//   getList,
//   filterInit = {},
//   disabled,
//   isLoadFirst = true,
//   refreshExt,
// }: useListProps) {
//   // 列表数据
//   const [list, setList] = useState<any[]>([]);
//   // 总数
//   const [total, setTotal] = useState<any>(null);
//   // 加载参数
//   const [loadInfo, setLoadInfo] = useState<loadInfo>({
//     page: 1,
//     type: 'load',
//     filter: filterInit,
//     refreshTemp: getRefreshTemp(),
//   });
//   const { page, type, filter, refreshTemp } = loadInfo;
//   const filterInv = useRef<any>(-1);
//   // 是否首次加载
//   const isLoadFirstTime = useRef<any>(true);
//   // 加载中
//   const loading = useRef<any>(false);
//
//   useEffect(() => {
//     !disabled && !isLoadFirstTime.current && getListFuc();
//   }, [page, type, filter, refreshTemp]);
//
//   useEffect(() => {
//     !disabled && isLoadFirst && getListFuc();
//     isLoadFirstTime.current = false;
//   }, []);
//
//   // 列表数据加载方法
//   const getListFuc = async () => {
//     showLoading({ title: '加载中...' });
//     const isLast = typeof total === 'number' && list.length >= total;
//     const isLoadMore = type === 'load';
//     const isStop = loading.current || (isLoadMore && isLast);
//     if (!isStop) {
//       loading.current = true;
//       try {
//         const res = await getList({ ...filter, current: page, size: 20 }); // 传入筛选条件
//         const { records = [], total: totalGet = 0 } = res.data;
//         const newList = page === 1 ? records : [...list, ...records];
//         setTotal(totalGet);
//         setList(newList);
//       } catch (e) {
//         console.log(e);
//       }
//       type === 'refresh' && Taro.stopPullDownRefresh();
//       setTimeout(() => {
//         loading.current = false;
//         hideLoading();
//       }, 0);
//     }
//     hideLoading();
//   };
//
//   // 刷新函数
//   const refresh = () => {
//     console.log('usePullDownRefresh ===');
//     setLoadInfo((prevState) => ({
//       ...prevState,
//       page: 1,
//       type: 'refresh',
//       refreshTemp: getRefreshTemp(),
//     }));
//     refreshExt && refreshExt();
//   };
//
//   // 加载更多
//   useReachBottom(() => {
//     const pageMore = page + 1;
//     setLoadInfo((prevState) => ({
//       ...prevState,
//       page: pageMore,
//       type: 'load',
//     }));
//   });
//
//   // 下拉刷新
//   usePullDownRefresh(refresh);
//
//   // 搜索或者筛选
//   const filterFuc = (filterOut, expand?: boolean, exclude?: string[]) => {
//     const finalFilter = omit(filter, exclude);
//     clearTimeout(filterInv.current);
//     filterInv.current = setTimeout(() => {
//       setLoadInfo({
//         page: 1,
//         type: 'search',
//         refreshTemp: getRefreshTemp(),
//         filter: expand ? { ...finalFilter, ...filterOut } : filterOut,
//       });
//     }, 300);
//   };
//
//   return useMemo(
//     () => ({ list, total, filter, filterFuc, refresh }),
//     [list, refreshTemp],
//   ); // 暴露筛选更新方法和目前筛选条件
// }
