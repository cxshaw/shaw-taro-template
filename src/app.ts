import {
  canIUse,
  getUpdateManager,
  hideLoading,
  showLoading,
  showModal,
} from '@tarojs/taro';
import { FC, useEffect } from 'react';

import '@/styles/index.less';
import '@taroify/core/index.scss';
import './app.less';

const App: FC<any> = (props) => {
  // 检查更新
  const handleCheckUpdate = () => {
    if (canIUse('getUpdateManager')) {
      const updateManager = getUpdateManager();
      updateManager.onCheckForUpdate((result) => {
        if (result.hasUpdate) {
          showModal({
            title: '更新提示',
            content: '检测到新版本，重新下载并打开',
            success: () => {
              showLoading({ title: '更新中...' });
              updateManager.onUpdateReady(() => {
                // 强制当前小程序应用上新版本并重启
                updateManager.applyUpdate();
                hideLoading();
              });
              // onUpdateFailed：当新版本下载失败回调
              updateManager.onUpdateFailed(() => {
                // 下载新版本失败
                showModal({
                  title: '已有新版本',
                  content: '新版本已经上线了，请重新进入小程序',
                });
              });
            },
          });
        }
      });
    }
  };

  // 初始化
  const handleInit = async () => {
    await handleCheckUpdate();
  };

  useEffect(() => {
    handleInit();
  }, []);

  return props.children;
};

export default App;
