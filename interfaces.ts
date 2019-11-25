/*
 * @Description: 接口列表
 * @Author: 吴文周
 * @Github: http://gitlab.yzf.net/wuwenzhou
 * @Date: 2019-11-25 10:32:46
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-11-25 23:19:33
 */

// 存货报表打印
export interface printExcelUsingPOST {
      qyid:Number
         ztdm:string
     exportVo:any
  
}

// 校验资产或存货批量初始化
export interface validBatchInitUsingPOST {
  ztdmList:any
     initType:string
  
}

// 获取资产或存货初始化详情
export interface getInitDetailUsingPOST {
  initType:string
  
  screenList:any
  
  page:Number
  
  pageSize:Number
  
}

// 校验资产或存货是否可以无需初始化
export interface validNotNeedInitUsingPOST {
  ztdmList:any
  initType:string
  
}

// 科目匹配
export interface matchZtkmUsingPOST {
  serialId:Number
  ztdm:string
  
}

// 自定义解析Excel文件
export interface customReadUsingPOST {
  autoInitCustomParseVO:any
  
}

// 获取科目余额初始化详情
export interface getInitDetailUsingPOST_1 {
  screenList:any
  page:Number
  pageSize:Number
  
}

// 编辑科目余额错误数据
export interface editErrorDataUsingPOST {
  fileId:Number
  sheetName:string
  jsonObject:any
  
}

// 发起单个科目余额文件校验
export interface editErrorDataUsingPOST_1 {
  fileId:Number
  
}

// 获取初始化首页详情
export interface getInitMainDetailUsingPOST {
  screenList:any
  kjnd:Number
  kjqj:Number
  page:Number
  pageSize:Number
  
}

// 资产或存货初始化编辑账套
export interface chooseAccountUsingPOST {
  ztdm:string
  fileId:Number
  serialId:string
  initType:string
  
}

// 删除菜单
export interface delMenuUsingPOST {
  helpcenterMenu:any
  
}

// 查询标题失败
export interface getTitleUsingPOST {
  mklx:string
  xzqhid:string
  
}

// 保存菜单
export interface saveMenuUsingPOST {
  helpcenterMenu:any
  
}

// 保存标题
export interface saveTitleUsingPOST {
  helpcenterTitle:any
  
}

// 帮助中心上传图片
export interface doUploadUsingPOST {
  picture:file
  
}

// 【智能建账】-【科目余额表导入】
export interface importKmyeUsingPOST {
  serialId:string
  originFileId:Number
  ztdm:string
  multipartFiles:Array
  
}

// 智能建账 - 导入人员
export interface importStaffsUsingPOST {
  serialId:string
  ztdm:string
  kjnd:Number
  kjqj:Number
  jwFlag:Number
  multipartFiles:Array
  
}

// 【初始数据】-【历史科目余额表导入】
export interface importLskmyeUsingPOST {
  ztdm:string
  multipartFile:file
  
}

// 【初始数据】-【现金流量导入】
export interface importXjllByModelUsingPOST {
  ztdm:string
  multipartFile:file
  
}

// 会计报表导入模板
export interface importKjbbTplUsingPOST {
  companyName:string
  btid:Number
  file:file
  
}

// 会计报表根据模板导入数据
export interface importKjbbTplValidUsingPOST {
  ztdm:string
  btid:Number
  file:file
  
}

// 会计报表根据模板导入数据
export interface importKjbbZbDataUsingPOST {
  ztdm:string
  btid:Number
  keysData:Array
  
}

// 导入历史凭证
export interface importLspzUsingPOST {
  ztdm:string
  file:file
  
}

// 初始化
export interface initUsingPOST {
  fileId:Number
  ztdm:string
  serialId:string
  initType:string
  multipartFiles:Array
  
}

// 银行导入
export interface bankInputUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  mbType:string
  bzid:Number
  yhzhid:Number
  excel:file
  isSeason:boolean
  
}

// 发票导入
export interface invoiceImportUsingPOST {
  readExcelKey:string
  kjnd:Number
  kjqj:Number
  qyid:Number
  ztdm:string
  fpType:string
  excel:file
  
}

// 导入正常工资初始化数据
export interface importGzCszUsingPOST {
  ztdm:string
  qyid:Number
  kjnd:Number
  kjqj:Number
  multipartFile:file
  
}

// 导入专项附加扣除
export interface importZxfjkcUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  qyid:Number
  uploadKey:string
  multipartFile:file
  
}

// 资产导入
export interface zcInputUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  excel:file
  
}

// 【企协通】-【客户管理】
export interface importQxtKhGlInfoUsingPOST {
  checkQyInfo:boolean
  checkIsCover:boolean
  needCoverQyIdList:Array
  multipartFile:file
  
}

// 获取货币换算后币值
export interface calcCurrencyUsingPOST {
  origAmount:number
  origBzId:Number
  targetBzId:Number
  queryDate:Array
  
}

// 获取所有币种相对于某币种的汇率(返回值为键值对形式)
export interface getCurrencyInfoMapUsingPOST {
  bzId:Number
  queryDatesStr:string
  
}

// 复制凭证
export interface FzPzUsingPOST {
  fzPzRequestVO:any
  
}

// 查询复制凭证不可选日期
export interface queryNotSelectedKjqjForFzPzUsingPOST {
  ztdm:string
  kjnd:Number
  
}

// 个税初始化批量报不存在人员修复接口
export interface fixRyInfoByYhAndMonthUsingPOST {
  po:any
  
}

// 发送采集报文
export interface sendCollectUsingPOST {
  qyid:Number
  type:string
  data:any
  itemId:string
  
}

// 发送发票采集报文
export interface sendInvoiceCollectUsingPOST {
  qyid:Number
  type:string
  data:string
  itemId:string
  ztdm:string
  kjnd:Number
  kjqj:Number
  
}

// 更新企业类型
export interface updateQylxUsingPOST {
  qyids:string
  
}

// 更新鉴定信息接口
export interface updateSbszidUsingPOST {
  updateSbszidDto:any
  
}

// 保存企业信息、国地税、账套信息接口
export interface saveQyInfoUsingPOST {
  info:any
  errors:any
  
}

// 用户身份验证
export interface yhInfocheckUsingPOST {
  yhdlm:string
  
}

// 调用CRO
export interface linkToCroUsingPOST {
  universalDzgsVo:any
  
}

// 根据用户名查询企业列表
export interface queryQyListUsingPOST {
  yhdlm:string
  qymc:string
  pageNum:string
  pageSize:string
  
}

// 查询代账公司客户纳税申报接口
export interface querySbqyListUsingPOST {
  gsid:Number
  fiscalYear:Number
  fiscalPeriod:Number
  startTimeStamp:string
  endTimeStamp:string
  
}

// 客户中心注册
export interface registerForBillingUsingPOST {
  dto:any
  
}

// 接收处理企协同老板或领办人向云端代账会发起的税金、工资、代账进度催办
export interface reminderUsingPOST_1 {
  custom_id:string
  gsid:string
  fiscal_year:string
  fiscal_period:string
  dzrw_id:string
  hasten_type:string
  hasten_person:string
  
}

// 保存代账公司信息
export interface saveDzgsInfoUsingPOST {
  dzgsSaveInfoVo:any
  
}

// 保存普及版代账公司信息
export interface saveDzgsInfoForUniversalUsingPOST {
  universalDzgsVo:any
  
}

// 更新普及版代账公司信息
export interface supplyDzgsInfoUsingPOST {
  universalDzgsVo:any
  
}

// 同步代账公司信息到平台
export interface sycToPlatformUsingPOST {
  universalDzgsVo:any
  
}

// 客户中心同步订单
export interface synOrderForBillingUsingPOST {
  platformOrderDTO:any
  
}

// 接收税金确认服务
export interface taxConfirmUsingPOST {
  taxConfirmVO:string
  
}

// 更新普及版代账公司信息
export interface updateDzgsInfoForUniversalUsingPOST {
  gsid:Number
  yhid:Number
  
}

// 更新个人工资明细表，同时更新工资汇总
export interface updateSalaryUsingPOST {
  qyid:Number
  xctjid:Number
  gsnsrsbh:string
  zjlx:string
  zjhm:string
  ygxm:string
  kjnd:Number
  kjqj:Number
  gzdynf:Number
  gzdyyf:Number
  kYfgz:string
  kGrjbyanglao:string
  kGrjbyiliao:string
  kGrsybx:string
  kGrdbylbx:string
  kGrbcyl:string
  kGrgjj:string
  kGs:string
  
}

// 上传发票数据
export interface uploadUsingPOST {
  data:string
  
}

// 帮助中心上传图片
export interface uploadPicUsingPOST {
  productType:string
  zyid:Number
  picture:file
  
}

// 校验是否填写信息完全
export interface validDzgsNsrsbhUsingPOST {
  gsid:Number
  yhid:Number
  
}

// 校验个人版注册手机号
export interface validPhone4RegisterUsingPOST {
  phone:string
  
}

// 查看企业税种申报回执
export interface viewReceiptUsingPOST {
  btids:string
  qyid:Number
  kjnd:Number
  kjqj:Number
  hzType:Number
  type:Number
  
}

// 更换手机号
export interface modifyIphoneUsingPOST {
  iphone:string
  qyId:Number
  
}

// 查询账户基本详情
export interface queryAccountDetailInfoUsingPOST {
  qyIds:Array
  
}

// 查询账户基本信息(包含校验)
export interface queryAccountBaseInfoUsingPOST {
  iphone:string
  nsrsbh:string
  
}

// 校验旧手机号是否正确
export interface validateUsingPOST {
  iphone:string
  qyId:Number
  
}

// 会计准则swagger
export interface queryKjbbAllData4AlibabaUsingPOST {
  request:any
  
}

// 会计准则swagger
export interface queryKjbbAllDataUsingPOST {
  request:any
  
}

// 获取btid接口
export interface queryKjbbBtidByZtdmUsingPOST {
  kjnd:Number
  kjqj:Number
  ztdm:string
  
}

// 企业会计准则利润表swagger
export interface queryKjbbDataUsingPOST {
  request:any
  
}

// 原始报表数据接口测试
export interface queryStandRptDataTestUsingPOST {
  request:any
  
}

// 催办
export interface urgeHandleUsingPOST {
  qyId:Number
  kjnd:Number
  kjqj:Number
  type:string
  
}

// 安徽赛思德压缩包导入
export interface zipUploadUsingPOST {
  zipFile:file
  gsid:string
  
}

// 保存系统消息
export interface saveMsgUsingPOST {
  saveXxVo:any
  
}

// 发送猫池短信
export interface CaptchaMsgUsingPOST {
  mobile:string
  captcha:string
  msgDate:string
  
}

// 获取客户端企业列表接口
export interface queryKhdQyListUsingPOST {
  qymc:string
  page:Number
  rows:Number
  drzt:string
  yhdlm:string
  yhmm:string
  
}

// 获取客户端企业列表接口
export interface queryBatchInitKhdQyListUsingPOST {
  qymc:string
  page:Number
  rows:Number
  drzt:string
  yhdlm:string
  yhmm:string
  
}

// 客户端采集数据保存
export interface saveClientLspzUsingPOST {
  encode:string
  
}

// 客户端采集数据保存
export interface saveLspzUsingPOST {
  pzJson:string
  kmJson:string
  kmyeJson:string
  qyKhddrzt:any
  errors:any
  
}

// 获取企业账套对照列表
export interface selectQyztdzListUsingPOST {
  qyid:string
  
}

// 获取企业账套对照列表
export interface selectQyztdzListByQyidsUsingPOST {
  qyids:string
  
}

// 客户端上传历史凭证
export interface uploadLsPzUsingPOST {
  file:file
  
}

// 保存科目层级且将继续解析凭证数据
export interface saveKmcjAndJxPzUsingPOST {
  dto:any
  pzkey:string
  
}

// 保存历史科目层级数据
export interface saveKmcjInfoUsingPOST {
  dto:any
  
}

// 设置状态
export interface setAdvertisementStatusUsingPOST {
  adType:string
  adStatus:Number
  
}

// 开始初始化数据判断
export interface checkJzOrQdDataUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  
}

// 清除数据
export interface cleanAllDataUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  
}

// 校验批量财务初始化的全部账套外币本位币之和与科目余额相等
export interface checkBwbWbKmyeUsingPOST {
  ztdmDTOS:any
  
}

// 校验账套列表中是否有需要手动处理的科目异常匹配项
export interface checkKmMatchErrorTypeUsingPOST {
  ztdmDTOs:any
  
}

// 校验批量财务初始化的全部账套损益类科目导入时期末余额是否有值
export interface checkSyKmsHasAccountUsingPOST {
  ztdmDTOS:any
  
}

// 批量确认财务初始化数据
export interface batchConfirmMatchZtkmDataUsingPOST {
  list:any
  
}

// 批量执行财务初始化
export interface batchExecuteCwcshUsingPOST {
  ztdmDTOS:any
  
}

// 查询批量财务初始化科目余额表数据总和列表
export interface batchListCqkmyeSumUsingPOST {
  ztdmDTOS:any
  qskmjc:Number
  jskmjc:Number
  sfxsfzhs:boolean
  sfxswb:boolean
  
}

// 查询数量核算列表, 仅包含第一个科目的数量核算数据
export interface batchListSlhsUsingPOST {
  ztdmDTOS:any
  qskmjc:Number
  jskmjc:Number
  
}

// 按外币税种获取外币核算科目余额表, 仅包含第一个科目的数量核算数据
export interface batchListWbhskmyeUsingPOST {
  ztdmDTOS:any
  qskmjc:Number
  jskmjc:Number
  sfxsfzhs:boolean
  sfxswb:boolean
  
}

// 查询现金流量表数据, 仅包含指定数据
export interface batchListXjllDataUsingPOST {
  ztdmDTOS:any
  
}

// 批量财务初始化账套和余额表匹配接口，更新账套和余额表的匹配状态
export interface updateMatchStatusUsingPOST {
  cwcshXlsXxLsb:any
  
}

// 处理财务初始化数据
export interface doCwcshDataUsingPOST {
  ztdm:string
  redisKey:string
  
}

// 处理财务初始化数量核算数据
export interface doCwcshSlhsDataUsingPOST {
  ztdm:string
  redisKey:string
  
}

// 获取可以作为上级目录集合
export interface getEnableAsFatherZtkmListUsingPOST {
  ztdm:string
  kjnd:Number
  kmbm:string
  
}

// 确定导入历史凭证
export interface comfirmInsertUsingPOST {
  ztdm:string
  resultDataKey:string
  
}

// 移动科目-设置科目上级
export interface resetSjKmUsingPOST {
  ztdm:string
  kjnd:Number
  firstLevelFlag:Number
  kmbm:string
  sjkmnm:string
  
}

// 设置财务初始化状态
export interface revertStatusUsingPOST {
  ztdm:string
  
}

// 批量更新企业是否无需初始化
export interface updateQySfwxcshUsingPOST {
  qyids:string
  type:string
  confirm:string
  
}

// getZczjListForXXFP
export interface getZczjListForXXFPUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  zclx:Number
  qqly:string
  
}

// 获取(进项发票页面)发票种类集合
export interface getFpzlListUsingPOST {
  kjnd:Number
  kjqj:Number
  
}

// 获取批量补充业务类型数据
export interface getYwlxRuleListUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  fplx:string
  qyid:Number
  qdids:string
  isAllSelected:boolean
  yhzhid:Number
  
}

// 批量补充往来单位
export interface saveDwmcListRedisUsingPOST {
  ztdm:string
  qyid:Number
  kjnd:Number
  kjqj:Number
  qdlx:string
  qdDwmcSupplyDataList:any
  isSelected:boolean
  
}

// 获取批量补充单位名称数据
export interface getQdDwmcSupplyDataListUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  qdlx:string
  qdids:string
  isAllSelected:boolean
  yhzhid:Number
  
}

// 完成批量补充
export interface saveFpSupplyCompleteUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  fplx:string
  qyid:Number
  ywgzbViewList:any
  isSelected:boolean
  
}

// 批量补充业务类型数据
export interface saveYwlxRulesRedisUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  fplx:string
  ywgzbViewList:any
  isSelected:boolean
  
}

// 智能记账 /批量下发税局采集个税初始化/专项附加扣除任务
export interface batchSendSalaryCollectTaskUsingPOST {
  kjnd:Number
  kjqj:Number
  
}

// 根据公式计算外籍工资收入
export interface calculateIncomeUsingPOST {
  gzWjgzmxV2:any
  kjnd:Number
  kjqj:Number
  
}

// 薪酬导出
export interface exportExcelUsingPOST {
  ztdm:string
  qyid:Number
  kjnd:Number
  kjqj:Number
  type:string
  xctjid:Number
  
}

// 删除当前账期数据
export interface deleteGzZxfjkcZbInfoUsingPOST {
  ztdm:string
  type:string
  kjnd:Number
  kjqj:Number
  ids:any
  
}

// 保存继续教育信息
export interface saveJxjyUsingPOST {
  gzJxjyInfoDTO:any
  
}

// 保存赡养老人信息
export interface saveSylrUsingPOST {
  gzSylrInfoDTO:any
  
}

// 保存住房贷款信息
export interface saveZfdkUsingPOST {
  gzZfdkInfoDTO:any
  
}

// 保存住房租金信息
export interface saveZfzjUsingPOST {
  gzZfzjInfoDTO:any
  
}

// 保存子女教育信息
export interface saveZnjyUsingPOST {
  gzZnjyInfoDTO:any
  
}

// 批量保存、更新初始化数据接口
export interface saveNormalSalaryInitDataUsingPOST {
  records:any
  ztdm:string
  qyid:Number
  kjnd:Number
  kjqj:Number
  
}

// 获得部门及其子部门的人员
export interface selectRyByBmidUsingPOST {
  bmid:Number
  qyid:Number
  ztdm:string
  kjnd:Number
  kjqj:Number
  ryxm:string
  zjhm:string
  isFanye:string
  page:any
  rows:any
  ryzt:string
  
}

// 批量下发社保采集任务
export interface batchSendSocialSecurityCollectTaskUsingPOST {
  qyids:any
  
}

// 更新社保采集人员增减记录的弹框是否弹过状态
export interface changeModalState2clickedUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  
}

// 批量下发税局采集个税初始化/专项附加扣除任务
export interface batchSendSalaryCollectTaskUsingPOST_1 {
  qyids:any
  type:string
  kjnd:Number
  kjqj:Number
  
}

// 批量下发税局采集个税初始化/专项附加扣除任务校验
export interface validSalaryCollectStatusUsingPOST {
  qyids:any
  type:string
  kjnd:Number
  kjqj:Number
  
}

// 批量小程序采集专项附加扣除
export interface batchCollectWechatUsingPOST {
  qyids:any
  kjnd:Number
  kjqj:Number
  
}

// 删除银行临时表数据
export interface deleteUploadUsingPOST {
  kHcid:Number
  
}

// 查询是否存在数据
export interface queryIsExistNotExtractedDataUsingPOST {
  kjnd:Number
  kjqj:Number
  ztdm:string
  bzid:Number
  
}

// 查询银行临时表数据
export interface queryUploadUsingPOST {
  kYhzhid:Number
  kjnd:Number
  kjqj:Number
  ztdm:string
  page:Number
  bzid:Number
  rows:Number
  isSeason:boolean
  
}

// 本地提取保存
export interface saveBdtqUsingPOST {
  kYhzhid:Number
  kjnd:Number
  kjqj:Number
  ztdm:string
  bzid:Number
  
}

// 保存银行临时表数据
export interface saveUploadUsingPOST {
  kYhzhid:Number
  kjnd:Number
  kjqj:Number
  ztdm:string
  bzid:Number
  isSeason:boolean
  
}

// zcZjztInsert
export interface zcZjztInsertUsingPOST {
  qyid:string
  kZtdm:string
  kKssj:string
  kJssj:string
  kKpbh:string
  
}

// 通知用户
export interface queryNotesParamUsingPOST {
  zcYhMessageDto:any
  
}

// 查询
export interface queryNotesUsingPOST {
  ztdm:Number
  
}

// 保存或修改
export interface saveOrUpdateUsingPOST {
  sysNotesDto:any
  
}

// 批量生成账套科目-存货使用
export interface batchAddZtkmForChUsingPOST {
  ztdm:string
  kjnd:Number
  kjqj:Number
  sjKmnm:string
  kmmc:string
  
}

// 获取可以接收被删除科目数据的科目集合
export interface getCanRecieveDataZtkmsUsingPOST {
  ztdm:string
  kjnd:Number
  kmnm:string
  
}

// 查询
export interface queryWaitAddPzUsingPOST {
  glPzWaitAddReqDto:any
  
}

// 记住/去处理
export interface rememberUsingPOST {
  glPzWaitAddReqDto:any
  
}
