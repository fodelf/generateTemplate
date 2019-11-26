/*
 * @Description: 接口列表
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-25 10:32:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-26 09:24:40
 */

// 存货报表打印
export interface PrintExcelUsingPOST {
  qyid: number; // qyid
  ztdm: string; // ztdm
  exportVo: any; // exportVo
}

// 根据存货名称/类别/编码/规格查询存货信息
export interface GetChInfoByChmcOrChlbUsingGET {
  ztdm: string; // 账套代码
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
  chmc?: string; // 存货筛选条件(名称/编码/规格)
  chlbid?: number; // 存货类别id
  page?: number; // 页码
  rows?: number; // 行数
  chzt?: string; // 存货状态
}

// 获取资产或存货确认数据列表
export interface GetConfirmDataUsingGET {
  serialId?: number; // serialId
  sheetName: string; // sheetName
  ztdm?: string; // ztdm
  initType: string; // initType
}
