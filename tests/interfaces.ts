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

// 校验资产或存货批量初始化
export interface ValidBatchInitUsingPOST {
  ztdmList: any; // ztdmList
  initType: string; // initType
}

// 获取资产或存货初始化详情
export interface GetInitDetailUsingPOST {
  initType: string; // initType
  screenList: any; // screenList
  page: number; // page
  pageSize: number; // pageSize
}

// 校验资产或存货是否可以无需初始化
export interface ValidNotNeedInitUsingPOST {
  ztdmList: any; // ztdmList
  initType: string; // initType
}

// 科目匹配
export interface MatchZtkmUsingPOST {
  serialId?: number; // serialId
  ztdm?: string; // ztdm
}

// 自定义解析Excel文件
export interface CustomReadUsingPOST {
  autoInitCustomParseVO: any; // autoInitCustomParseVO
}

// 获取科目余额初始化详情
export interface GetInitDetailUsingPOST_1 {
  screenList: any; // screenList
  page: number; // page
  pageSize: number; // pageSize
}

// 编辑科目余额错误数据
export interface EditErrorDataUsingPOST {
  fileId?: number; // fileId
  sheetName?: string; // sheetName
  jsonObject?: any; // 数据列表
}

// 发起单个科目余额文件校验
export interface EditErrorDataUsingPOST_1 {
  fileId?: number; // fileId
}

// 获取初始化首页详情
export interface GetInitMainDetailUsingPOST {
  screenList: any; // screenList
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  page: number; // page
  pageSize: number; // pageSize
}

// 资产或存货初始化编辑账套
export interface ChooseAccountUsingPOST {
  ztdm: string; // ztdm
  fileId: number; // fileId
  serialId?: string; // serialId
  initType: string; // initType
}

// 删除菜单
export interface DelMenuUsingPOST {
  helpcenterMenu: any; // helpcenterMenu
}

// 查询标题失败
export interface GetTitleUsingPOST {
  mklx?: string; // CWCSH
  xzqhid?: string; // 0
}

// 保存菜单
export interface SaveMenuUsingPOST {
  helpcenterMenu: any; // helpcenterMenu
}

// 保存标题
export interface SaveTitleUsingPOST {
  helpcenterTitle: any; // helpcenterTitle
}

// 帮助中心上传图片
export interface DoUploadUsingPOST {
  picture?: any; // picture
}

// 【智能建账】-【科目余额表导入】
export interface ImportKmyeUsingPOST {
  serialId?: string; // serialId
  originFileId?: number; // originFileId
  ztdm?: string; // ztdm
  multipartFiles: any; // multipartFiles
}

// 智能建账 - 导入人员
export interface ImportStaffsUsingPOST {
  serialId?: string; // serialId
  ztdm?: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  jwFlag?: number; // jwFlag
  multipartFiles: any; // multipartFiles
}

// 【初始数据】-【历史科目余额表导入】
export interface ImportLskmyeUsingPOST {
  ztdm: string; // ztdm
  multipartFile: any; // multipartFile
}

// 【初始数据】-【现金流量导入】
export interface ImportXjllByModelUsingPOST {
  ztdm: string; // ztdm
  multipartFile: any; // multipartFile
}

// 会计报表导入模板
export interface ImportKjbbTplUsingPOST {
  companyName: string; // companyName
  btid: number; // btid
  file?: any; // file
}

// 会计报表根据模板导入数据
export interface ImportKjbbTplValidUsingPOST {
  ztdm: string; // ztdm
  btid: number; // btid
  file: any; // file
}

// 会计报表根据模板导入数据
export interface ImportKjbbZbDataUsingPOST {
  ztdm: string; // ztdm
  btid: number; // btid
  keysData: any; // keysData
}

// 导入历史凭证
export interface ImportLspzUsingPOST {
  ztdm: string; // ztdm
  file?: any; // file
}

// 初始化
export interface InitUsingPOST {
  fileId?: number; // fileId
  ztdm?: string; // ztdm
  serialId?: string; // serialId
  initType: string; // initType
  multipartFiles: any; // multipartFiles
}

// 银行导入
export interface BankInputUsingPOST {
  ztdm: string; // 账套代码
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
  mbType: string; // 模板类型
  bzid?: number; // 币种id
  yhzhid: number; // 银行账户id
  excel: any; // 银行导入 excel
  isSeason?: boolean; // 是否按季度提取
}

// 发票导入
export interface InvoiceImportUsingPOST {
  readExcelKey: string; // 读取ExcelKey
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
  qyid?: number; // 企业id
  ztdm: string; // 账套代码
  fpType: string; // 发票类型（进项/销项）
  excel: any; // 发票导入 excel
}

// 导入正常工资初始化数据
export interface ImportGzCszUsingPOST {
  ztdm: string; // ztdm
  qyid: number; // qyid
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  multipartFile: any; // multipartFile
}

// 导入专项附加扣除
export interface ImportZxfjkcUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  qyid: number; // qyid
  uploadKey: string; // uploadKey
  multipartFile: any; // multipartFile
}

// 资产导入
export interface ZcInputUsingPOST {
  ztdm?: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  excel: any; // excel
}

// 【企协通】-【客户管理】
export interface ImportQxtKhGlInfoUsingPOST {
  checkQyInfo: boolean; // checkQyInfo
  checkIsCover: boolean; // checkIsCover
  needCoverQyIdList?: any; // needCoverQyIdList
  multipartFile: any; // multipartFile
}

// 获取货币换算后币值
export interface CalcCurrencyUsingPOST {
  origAmount: number; // 原始货币金额
  origBzId: number; // 原始货币id
  targetBzId: number; // 目标货币id
  queryDate?: any; // 查询日期
}

// 获取所有币种相对于某币种的汇率(返回值为键值对形式)
export interface GetCurrencyInfoMapUsingPOST {
  bzId: number; // 目标币种id
  queryDatesStr: string; // 查询日期,多个日期以逗号隔开
}

// 复制凭证
export interface FzPzUsingPOST {
  fzPzRequestVO: any; // fzPzRequestVO
}

// 查询复制凭证不可选日期
export interface QueryNotSelectedKjqjForFzPzUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
}

// 个税初始化批量报不存在人员修复接口
export interface FixRyInfoByYhAndMonthUsingPOST {
  po: any; // po
}

// 发送采集报文
export interface SendCollectUsingPOST {
  qyid: number; // 企业id
  type: string; // 数据类型2-国税 3-地税 1-国税基本 6-地税基本
  data: any; // 报文数据 encoding=&quot;utf-8&quot;
  itemId: string; // TaskItem ID
}

// 发送发票采集报文
export interface SendInvoiceCollectUsingPOST {
  qyid: number; // 企业id
  type: string; // 数据类型2-国税 3-地税 1-国税基本 6-地税基本
  data: string; // data
  itemId: string; // TaskItem ID
  ztdm: string; // 账套代码
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
}

// 更新企业类型
export interface UpdateQylxUsingPOST {
  qyids?: string; // qyids
}

// 更新鉴定信息接口
export interface UpdateSbszidUsingPOST {
  updateSbszidDto: any; // updateSbszidDto
}

// 保存企业信息、国地税、账套信息接口
export interface SaveQyInfoUsingPOST {
  info: any; // info
  errors?: any; // errors
}

// 用户身份验证
export interface YhInfocheckUsingPOST {
  yhdlm: string; // 用户登录名
}

// 调用CRO
export interface LinkToCroUsingPOST {
  universalDzgsVo: any; // 代账公司信息
}

// 根据用户名查询企业列表
export interface QueryQyListUsingPOST {
  yhdlm: string; // 用户登录名
  qymc?: string; // 企业名称
  pageNum?: string; // 第几页
  pageSize?: string; // 条数
}

// 查询代账公司客户纳税申报接口
export interface QuerySbqyListUsingPOST {
  gsid: number; // 代账公司id
  fiscalYear: number; // 会计年度
  fiscalPeriod: number; // 会计期间
  startTimeStamp?: string; // 查询区间的开始时间
  endTimeStamp?: string; // 查询区间的结束时间
}

// 客户中心注册
export interface RegisterForBillingUsingPOST {
  dto: any; // 代账公司信息
}

// 接收处理企协同老板或领办人向云端代账会发起的税金、工资、代账进度催办
export interface ReminderUsingPOST_1 {
  custom_id: string; // 企业id
  gsid?: string; // 代账公司id
  fiscal_year: string; // 会计年度
  fiscal_period: string; // 会计期间
  dzrw_id: string; // 代账任务id
  hasten_type: string; // 催办类别
  hasten_person: string; // 催办人
}

// 保存代账公司信息
export interface SaveDzgsInfoUsingPOST {
  dzgsSaveInfoVo: any; // 代账公司信息
}

// 保存普及版代账公司信息
export interface SaveDzgsInfoForUniversalUsingPOST {
  universalDzgsVo: any; // 代账公司信息
}

// 更新普及版代账公司信息
export interface SupplyDzgsInfoUsingPOST {
  universalDzgsVo: any; // 代账公司信息
}

// 同步代账公司信息到平台
export interface SycToPlatformUsingPOST {
  universalDzgsVo: any; // 代账公司信息
}

// 客户中心同步订单
export interface SynOrderForBillingUsingPOST {
  platformOrderDTO: any; // 订单信息
}

// 接收税金确认服务
export interface TaxConfirmUsingPOST {
  taxConfirmVO: string; // 税款确认实体
}

// 更新普及版代账公司信息
export interface UpdateDzgsInfoForUniversalUsingPOST {
  gsid: number; // 代账公司id
  yhid: number; // 用户id
}

// 更新个人工资明细表，同时更新工资汇总
export interface UpdateSalaryUsingPOST {
  qyid: number; // 企业id
  xctjid: number; // 薪酬id
  gsnsrsbh?: string; // 纳税人识别号
  zjlx: string; // 证件类型
  zjhm: string; // 证件号码
  ygxm?: string; // 员工姓名
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
  gzdynf: number; // 工资对应年份
  gzdyyf: number; // 工资对应月份
  kYfgz: string; // 应发工资
  kGrjbyanglao?: string; // 个人基本养老
  kGrjbyiliao?: string; // 个人基本医疗
  kGrsybx?: string; // 个人失业保险
  kGrdbylbx?: string; // 个人大病医疗保险
  kGrbcyl?: string; // 个人补充养老
  kGrgjj?: string; // 个人公积金
  kGs?: string; // 个税
}

// 上传发票数据
export interface UploadUsingPOST {
  data: string; // 请求数据
}

// 帮助中心上传图片
export interface UploadPicUsingPOST {
  productType: string; // 产品类型
  zyid: number; // 资源id
  picture?: any; // picture
}

// 校验是否填写信息完全
export interface ValidDzgsNsrsbhUsingPOST {
  gsid: number; // 代账公司id
  yhid: number; // 用户id
}

// 校验个人版注册手机号
export interface ValidPhone4RegisterUsingPOST {
  phone: string; // phone
}

// 查看企业税种申报回执
export interface ViewReceiptUsingPOST {
  btids: string; // btids
  qyid: number; // qyid
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  hzType?: number; // 0 申报回执 1 扣款回执 2 撤销回执
  type?: number; // 0-查最新 1-查所有
}

// 更换手机号
export interface ModifyIphoneUsingPOST {
  iphone: string; // iphone
  qyId: number; // qyId
}

// 查询账户基本详情
export interface QueryAccountDetailInfoUsingPOST {
  qyIds: any; // qyIds
}

// 查询账户基本信息(包含校验)
export interface QueryAccountBaseInfoUsingPOST {
  iphone: string; // iphone
  nsrsbh: string; // nsrsbh
}

// 校验旧手机号是否正确
export interface ValidateUsingPOST {
  iphone: string; // iphone
  qyId: number; // qyId
}

// 会计准则swagger
export interface QueryKjbbAllData4AlibabaUsingPOST {
  request: any; // 请求对象
}

// 会计准则swagger
export interface QueryKjbbAllDataUsingPOST {
  request: any; // 请求对象
}

// 获取btid接口
export interface QueryKjbbBtidByZtdmUsingPOST {
  kjnd: number; // 开启会计年度
  kjqj: number; // 开始会计期间
  ztdm: string; // 账套代码
}

// 企业会计准则利润表swagger
export interface QueryKjbbDataUsingPOST {
  request: any; // 利润表信息
}

// 原始报表数据接口测试
export interface QueryStandRptDataTestUsingPOST {
  request: any; // request
}

// 催办
export interface UrgeHandleUsingPOST {
  qyId: number; // qyId
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  type: string; // type
}

// 安徽赛思德压缩包导入
export interface ZipUploadUsingPOST {
  zipFile?: any; // 压缩文件
  gsid?: string; // 代账公司ID
}

// 保存系统消息
export interface SaveMsgUsingPOST {
  saveXxVo: any; // saveXxVo
}

// 发送猫池短信
export interface CaptchaMsgUsingPOST {
  mobile: string; // mobile
  captcha: string; // captcha
  msgDate: string; // msgDate
}

// 获取客户端企业列表接口
export interface QueryKhdQyListUsingPOST {
  qymc?: string; // qymc
  page: number; // page
  rows: number; // rows
  drzt?: string; // drzt
  yhdlm: string; // yhdlm
  yhmm: string; // yhmm
}

// 获取客户端企业列表接口
export interface QueryBatchInitKhdQyListUsingPOST {
  qymc?: string; // qymc
  page: number; // page
  rows: number; // rows
  drzt?: string; // drzt
  yhdlm?: string; // yhdlm
  yhmm?: string; // yhmm
}

// 客户端采集数据保存
export interface SaveClientLspzUsingPOST {
  encode: string; // encode
}

// 客户端采集数据保存
export interface SaveLspzUsingPOST {
  pzJson: string; // pzJson
  kmJson: string; // kmJson
  kmyeJson: string; // kmyeJson
  qyKhddrzt?: any; // qyKhddrzt
  errors?: any; // errors
}

// 获取企业账套对照列表
export interface SelectQyztdzListUsingPOST {
  qyid: string; // qyid
}

// 获取企业账套对照列表
export interface SelectQyztdzListByQyidsUsingPOST {
  qyids: string; // qyids
}

// 客户端上传历史凭证
export interface UploadLsPzUsingPOST {
  file?: any; // file
}

// 保存科目层级且将继续解析凭证数据
export interface SaveKmcjAndJxPzUsingPOST {
  dto: any; // dto
  pzkey: string; // pzkey
}

// 保存历史科目层级数据
export interface SaveKmcjInfoUsingPOST {
  dto: any; // dto
}

// 设置状态
export interface SetAdvertisementStatusUsingPOST {
  adType?: string; // 广告类型
  adStatus?: number; // 广告状态
}

// 开始初始化数据判断
export interface CheckJzOrQdDataUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 清除数据
export interface CleanAllDataUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 校验批量财务初始化的全部账套外币本位币之和与科目余额相等
export interface CheckBwbWbKmyeUsingPOST {
  ztdmDTOS?: any; // 数据确认的账套信息, 只传账套代码、会计年度、会计期间、企业名称必须传
}

// 校验账套列表中是否有需要手动处理的科目异常匹配项
export interface CheckKmMatchErrorTypeUsingPOST {
  ztdmDTOs: any; // ztdmDTOs
}

// 校验批量财务初始化的全部账套损益类科目导入时期末余额是否有值
export interface CheckSyKmsHasAccountUsingPOST {
  ztdmDTOS?: any; // 数据确认的账套信息, 账套代码、会计年度、会计期间、企业名称必须传
}

// 批量确认财务初始化数据
export interface BatchConfirmMatchZtkmDataUsingPOST {
  list: any; // list
}

// 批量执行财务初始化
export interface BatchExecuteCwcshUsingPOST {
  ztdmDTOS?: any; // 数据确认的账套信息, 账套代码、会计年度、会计期间、企业名称必须传
}

// 查询批量财务初始化科目余额表数据总和列表
export interface BatchListCqkmyeSumUsingPOST {
  ztdmDTOS: any; // ztdmDTOS
  qskmjc?: number; // 起始科目简称
  jskmjc?: number; // 结束科目简称
  sfxsfzhs?: boolean; // 是否显示辅助核算
  sfxswb?: boolean; // 是否显示外币
}

// 查询数量核算列表, 仅包含第一个科目的数量核算数据
export interface BatchListSlhsUsingPOST {
  ztdmDTOS: any; // ztdmDTOS
  qskmjc?: number; // 起始科目层级
  jskmjc?: number; // 结束科目层级
}

// 按外币税种获取外币核算科目余额表, 仅包含第一个科目的数量核算数据
export interface BatchListWbhskmyeUsingPOST {
  ztdmDTOS: any; // ztdmDTOS
  qskmjc?: number; // 起始科目简称
  jskmjc?: number; // 结束科目简称
  sfxsfzhs?: boolean; // 是否显示辅助核算
  sfxswb?: boolean; // 是否显示外币
}

// 查询现金流量表数据, 仅包含指定数据
export interface BatchListXjllDataUsingPOST {
  ztdmDTOS: any; // ztdmDTOS
}

// 批量财务初始化账套和余额表匹配接口，更新账套和余额表的匹配状态
export interface UpdateMatchStatusUsingPOST {
  cwcshXlsXxLsb: any; // 未匹配上的余额表对象 回传时填充上账套代码
}

// 处理财务初始化数据
export interface DoCwcshDataUsingPOST {
  ztdm?: string; // 账套代码
  redisKey?: string; // redis数据key
}

// 处理财务初始化数量核算数据
export interface DoCwcshSlhsDataUsingPOST {
  ztdm?: string; // 账套代码
  redisKey?: string; // redis数据key
}

// 获取可以作为上级目录集合
export interface GetEnableAsFatherZtkmListUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  kmbm?: string; // 科目编码
}

// 确定导入历史凭证
export interface ComfirmInsertUsingPOST {
  ztdm: string; // ztdm
  resultDataKey: string; // resultDataKey
}

// 移动科目-设置科目上级
export interface ResetSjKmUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  firstLevelFlag?: number; // 是否作为一级1:是;0:否
  kmbm?: string; // 科目编码
  sjkmnm?: string; // 新的上级科目内码
}

// 设置财务初始化状态
export interface RevertStatusUsingPOST {
  ztdm: string; // ztdm
}

// 批量更新企业是否无需初始化
export interface UpdateQySfwxcshUsingPOST {
  qyids: string; // qyids
  type: string; // type
  confirm?: string; // confirm
}

// getZczjListForXXFP
export interface GetZczjListForXXFPUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  zclx: number; // zclx
  qqly?: string; // qqly
}

// 获取(进项发票页面)发票种类集合
export interface GetFpzlListUsingPOST {
  kjnd: number; // kjnd
  kjqj: number; // kjqj
}

// 获取批量补充业务类型数据
export interface GetYwlxRuleListUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  fplx: string; // fplx
  qyid: number; // qyid
  qdids?: string; // qdids
  isAllSelected?: boolean; // isAllSelected
  yhzhid?: number; // yhzhid
}

// 批量补充往来单位
export interface SaveDwmcListRedisUsingPOST {
  ztdm?: string; // 账套代码
  qyid?: number; // 企业ID
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
  qdlx?: string; // 清单类型
  qdDwmcSupplyDataList: any; // qdDwmcSupplyDataList
  isSelected: boolean; // isSelected
}

// 获取批量补充单位名称数据
export interface GetQdDwmcSupplyDataListUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
  qdlx?: string; // 清单类型
  qdids?: string; // 清单IDs
  isAllSelected?: boolean; // isAllSelected
  yhzhid?: number; // yhzhid
}

// 完成批量补充
export interface SaveFpSupplyCompleteUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  fplx: string; // fplx
  qyid: number; // qyid
  ywgzbViewList?: any; // ywgzbViewList
  isSelected: boolean; // isSelected
}

// 批量补充业务类型数据
export interface SaveYwlxRulesRedisUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  fplx: string; // fplx
  ywgzbViewList: any; // ywgzbViewList
  isSelected: boolean; // isSelected
}

// 智能记账 /批量下发税局采集个税初始化/专项附加扣除任务
export interface BatchSendSalaryCollectTaskUsingPOST {
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 根据公式计算外籍工资收入
export interface CalculateIncomeUsingPOST {
  gzWjgzmxV2: any; // gzWjgzmxV2
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 薪酬导出
export interface ExportExcelUsingPOST {
  ztdm: string; // ztdm
  qyid: number; // qyid
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  type: string; // type
  xctjid?: number; // xctjid
}

// 删除当前账期数据
export interface DeleteGzZxfjkcZbInfoUsingPOST {
  ztdm: string; // 账套代码
  type: string; // 专项附加扣除类型 &lt;br/&gt; ZNJY:子女教育 &lt;br/&gt; JXJY:继续教育 &lt;br/&gt; SYLR:赡养老人 &lt;br/&gt; ZFZJ:住房租金 &lt;br/&gt; ZFDKLX:住房贷款利息
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
  ids?: any; // 要删除的ID列表
}

// 保存继续教育信息
export interface SaveJxjyUsingPOST {
  gzJxjyInfoDTO: any; // gzJxjyInfoDTO
}

// 保存赡养老人信息
export interface SaveSylrUsingPOST {
  gzSylrInfoDTO: any; // gzSylrInfoDTO
}

// 保存住房贷款信息
export interface SaveZfdkUsingPOST {
  gzZfdkInfoDTO: any; // gzZfdkInfoDTO
}

// 保存住房租金信息
export interface SaveZfzjUsingPOST {
  gzZfzjInfoDTO: any; // gzZfzjInfoDTO
}

// 保存子女教育信息
export interface SaveZnjyUsingPOST {
  gzZnjyInfoDTO: any; // gzZnjyInfoDTO
}

// 批量保存、更新初始化数据接口
export interface SaveNormalSalaryInitDataUsingPOST {
  records: any; // records
  ztdm: string; // ztdm
  qyid: number; // qyid
  kjnd: number; // kjnd
  kjqj: number; // kjqj
}

// 获得部门及其子部门的人员
export interface SelectRyByBmidUsingPOST {
  bmid: number; // bmid
  qyid: number; // qyid
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  ryxm?: string; // ryxm
  zjhm?: string; // zjhm
  isFanye?: string; // isFanye
  page?: any; // page
  rows?: any; // rows
  ryzt?: string; // ryzt
}

// 批量下发社保采集任务
export interface BatchSendSocialSecurityCollectTaskUsingPOST {
  qyids?: any; // 企业ID列表
}

// 更新社保采集人员增减记录的弹框是否弹过状态
export interface ChangeModalState2clickedUsingPOST {
  ztdm: string; // 账套代码
  kjnd: number; // 会计年度
  kjqj: number; // 会计期间
}

// 批量下发税局采集个税初始化/专项附加扣除任务
export interface BatchSendSalaryCollectTaskUsingPOST_1 {
  qyids?: any; // 企业ID列表
  type?: string; // 类型: &lt;br/&gt; 个税初始化采集=1&lt;br/&gt; 专项附加扣除=2
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 批量下发税局采集个税初始化/专项附加扣除任务校验
export interface ValidSalaryCollectStatusUsingPOST {
  qyids?: any; // 企业ID列表
  type?: string; // 类型: &lt;br/&gt; 个税初始化采集=1&lt;br/&gt; 专项附加扣除=2
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 批量小程序采集专项附加扣除
export interface BatchCollectWechatUsingPOST {
  qyids?: any; // 企业ID列表
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
}

// 删除银行临时表数据
export interface DeleteUploadUsingPOST {
  kHcid?: number; // 什么id 我也不知道
}

// 查询是否存在数据
export interface QueryIsExistNotExtractedDataUsingPOST {
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  ztdm: string; // ztdm
  bzid: number; // bzid
}

// 查询银行临时表数据
export interface QueryUploadUsingPOST {
  kYhzhid?: number; // 银行账户id
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
  ztdm?: string; // 账套代码
  page?: number; // 页数
  bzid?: number; // 币种id
  rows?: number; // 行数
  isSeason?: boolean; // 是否季度导入
}

// 本地提取保存
export interface SaveBdtqUsingPOST {
  kYhzhid: number; // kYhzhid
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  ztdm: string; // ztdm
  bzid?: number; // bzid
}

// 保存银行临时表数据
export interface SaveUploadUsingPOST {
  kYhzhid?: number; // 银行账户id
  kjnd?: number; // 会计年度
  kjqj?: number; // 会计期间
  ztdm?: string; // 账套代码
  bzid?: number; // 币种id
  isSeason?: boolean; // 是否按季导入 true 是 false 否
}

// zcZjztInsert
export interface ZcZjztInsertUsingPOST {
  qyid: string; // qyid
  kZtdm: string; // kZtdm
  kKssj: string; // kKssj
  kJssj: string; // kJssj
  kKpbh: string; // kKpbh
}

// 通知用户
export interface QueryNotesParamUsingPOST {
  zcYhMessageDto: any; // zcYhMessageDto
}

// 查询
export interface QueryNotesUsingPOST {
  ztdm: number; // ztdm
}

// 保存或修改
export interface SaveOrUpdateUsingPOST {
  sysNotesDto: any; // sysNotesDto
}

// 批量生成账套科目-存货使用
export interface BatchAddZtkmForChUsingPOST {
  ztdm: string; // ztdm
  kjnd: number; // kjnd
  kjqj: number; // kjqj
  sjKmnm: string; // sjKmnm
  kmmc: string; // kmmc
}

// 获取可以接收被删除科目数据的科目集合
export interface GetCanRecieveDataZtkmsUsingPOST {
  ztdm?: string; // 账套代码
  kjnd?: number; // 会计年度
  kmnm?: string; // 科目内码
}

// 查询
export interface QueryWaitAddPzUsingPOST {
  glPzWaitAddReqDto: any; // glPzWaitAddReqDto
}

// 记住/去处理
export interface RememberUsingPOST {
  glPzWaitAddReqDto: any; // glPzWaitAddReqDto
}
