const realeaseVersion = "v1.0"
// 开发
const host = 'http://localhost:3000'
// 测试
// const host = 'localhost:3000'
// 正式
// const host = 'localhost:3000'

export default {
  // 系统名称
  systemName: 'Vue3.0',
  // 版本号
  buildVersion: realeaseVersion,
  // 更新内容
  buildVersionInfo: '项目搭建',
  // 本地版本号 + 发布时间
  version: realeaseVersion + '-' + '11/14 14:00',
  // 是否为bebug模式
  // isDebug: host !== 'localhost:3000',
  // 请求接口Api环境
  host: host
}