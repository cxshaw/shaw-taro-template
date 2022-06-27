import Taro from '@tarojs/taro';
import CryptoJS from 'crypto-js/crypto-js';

import { OptionKey, OptionValue } from '@/@types/component';

/**
 * 生成加盐加密后密码
 * @param password {String} 需加密密码
 * @param keyStr {String} 加密key
 * @param ivStr {String} 偏移量
 * @returns {String} sha-256加密后密码
 * @author 张铭 2018/08/01
 */
export function encryptPwdByAes(
  password: string,
  keyStr: string,
  ivStr: string,
): string {
  const key = CryptoJS.enc.Utf8.parse(password);
  const iv = CryptoJS.enc.Utf8.parse(ivStr);
  const srcs = CryptoJS.enc.Utf8.parse(keyStr);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

/**
 * 生成加盐加密需要的ivStr
 * @param password {String} 填充后的密码
 * @returns ivStr {String} 偏移量
 * @author 钟小燕 2018/01/10
 */
export function encryptIvStr(password: string): string {
  const shortPass = password.substring(0, 16);
  return shortPass.split('').reverse().join('');
}

/**
 * token加密
 * @returns {String} aes加密后的token，携带时间
 * @author 招摇 2020/07/22
 */
export function AESToken(token) {
  const key24 = 'HKCADQN7E5WJ3KQRPACNZ3QH'; // 前端写死，需要告诉后端
  const t = new Date().getTime();
  const keyStr = `${token}${t}`;
  const IV = encryptIvStr(key24);
  const secret = encryptPwdByAes(key24, keyStr, IV);
  return secret;
}

// 获取Picker的value
export const getPickerValue = (
  options: Map<OptionKey, OptionValue>,
  label: string,
) => {
  const item = Array.from(options).find((o) => o[1] === label);
  return item ? item[0] : undefined;
};

export const getCurrentPagePath = (): string => {
  const pages = Taro.getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return currentPage.route;
};

// export const formatMoney = (val: number | string, type: number) => {
//   if (val === '' || val === 0) return '0.00';
//   const num = Number(val);
//   if (isNaN(num)) return '';
//   return num.toFixed(type).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
// };

export const dealThousands = (value: string, sv: number) => {
  if (!value) {
    return '';
  }
  let num = '';
  if (value !== '') {
    value += ''; // 转化成字符串
    value = parseFloat(value.replace(/,/g, '')).toFixed(sv); // 若需要其他小数精度，可将2改成变量
    if (value.indexOf('.') === -1) {
      num = value.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => {
        return `${s},`;
      });
    } else {
      num = value.replace(/(\d)(?=(\d{3})+\.)/g, (s) => {
        return `${s},`;
      });
    }
  } else {
    num = '';
  }
  return num;
};
