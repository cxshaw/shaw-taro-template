// 有无
export const IS_HAS = new Map<number, string>([
  [1, '有'],
  [2, '无'],
]);

// 定制 优先级
export const CUSTOM_PRIORITY = new Map<number, string>([
  [1, '一般'],
  [2, '高'],
  [3, '加急'],
]);

// 定制 对接类型
export const CUSTOM_DOCKING_TYPE = new Map<number, string>([
  [1, '健康码'],
  [2, '实名制'],
  [3, '智慧工地'],
]);

// 定制 对接类型 查询
export const CUSTOM_DOCKING_TYPE_FILTER = new Map<number, string>([
  [-1, '全部类型'],
  [1, '健康码'],
  [2, '实名制'],
  [3, '智慧工地'],
]);

// 定制 对接进度
export const CUSTOM_DOCKING_SCHEDULE = new Map<number, string>([
  [0, '待审批'],
  [1, '审批中'],
  [2, '排队'],
  [3, '研发中'],
  [4, '暂停'],
  [5, '上线'],
  [6, '下线'],
]);

// 定制 对接进度 查询
export const CUSTOM_DOCKING_SCHEDULE_FILTER = new Map<number, string>([
  [-1, '全部进度'],
  [0, '待审批'],
  [1, '审批中'],
  [2, '排队'],
  [3, '研发中'],
  [4, '暂停'],
  [5, '上线'],
  [6, '下线'],
]);

// 定制 对接方式
export const CUSTOM_DOCKING_WAY = new Map<number, string>([
  [1, '平台上报'],
  [2, '终端上报'],
]);

// 定制 对接方式 查询
export const CUSTOM_DOCKING_WAY_FILTER = new Map<number, string>([
  [-1, '全部方式'],
  [1, '平台上报'],
  [2, '终端上报'],
]);
