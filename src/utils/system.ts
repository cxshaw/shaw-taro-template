/**
 * 对比版本号
 */
export const compareVersion = (verPrev, verCurr) => {
  const v1 = verPrev.split('.');
  const v2 = verCurr.split('.');
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (let i = 0; i < len; i++) {
    const numPrev = parseInt(v1[i], 10);
    const numCurr = parseInt(v2[i], 10);

    if (numPrev > numCurr) {
      return 1;
    } else if (numPrev < numCurr) {
      return -1;
    }
  }

  return 0;
};
