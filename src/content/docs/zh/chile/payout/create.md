---
title: 创建代付
description: 商户请求创建一个代付订单
---

### 请求地址

| method | url                       |
| ------ | ------------------------- |
| POST   | /api/pay/payout/create/v1 |

### 头部信息（header）

| header 参数 | 入参参数描述 |
| ----------- | ------------ |
| timestamp   | 请求时间戳   |
| nonce       | 随机值       |
| country     | CL           |
| app_code    | app 编号     |

### 请求参数

| 字段            | 类型   | 必需 | 长度 | 描述                                   |
| --------------- | ------ | ---- | ---- | -------------------------------------- |
| merchantOrderNo | String | yes  | 32   | 商户订单号                             |
| amount          | String | yes  | 20   | 代付金额(比索) 仅支持整数              |
| bankCode        | String | yes  | 50   | 银行编码                               |
| bankName        | String | yes  | 50   | 银行名称                               |
| accountType     | Int    | yes  |      | 账户类型 详情请看银行列表中的账户类型  |
| bankAccount     | String | yes  | 50   | 收款账号                               |
| realName        | String | yes  | 40   | 用户姓名 不包含特殊字符，建议全大写    |
| idCardNumber    | String | yes  | 50   | 收款人证件号码                         |
| idType          | Stirng | yes  | 32   | 证件类型 详情请看证件列表中的账户类型  |
| phone           | Stirng | yes  | 10   | 用户电话                               |
| email           | Stirng | yes  | 64   | 用户邮箱                               |
| callbackUrl     | String | no   | 200  | 代付回调地址，若不传, 则以商户配置为准 |
| sign            | String | yes  |      | 签名                                   |

```json title=请求示例
{
  "bankAccount": "3000000000",
  "bankCode": "",
  "bankName": "BANCO ESTADO",
  "amount": "10000",
  "idType": "CC",
  "accountType": 201,
  "merchantOrderNo": "OrderNoExample",
  "realName": "TEEMO",
  "phone": "3000000000",
  "idCardNumber": "1234567890",
  "callbackUrl": "https://www.callbackexample.com",
  "email": "TTpay@example.com",
  "sign": "YOUR_SIGN"
}
```

### 返回参数

| 参数            | 类型   | 必需 | 长度 | 描述                                   |
| --------------- | ------ | ---- | ---- | -------------------------------------- |
| merchantOrderNo | String | yes  | 32   | 商户订单号                             |
| tradeNo         | String | yes  |      | 平台订单号                             |
| status          | Int    | yes  |      | 代付状态,1:支付中 3:失败(可以重新发起) |
| amount          | String | yes  |      | 交易金额                               |

```json title=成功示例
{
  "msg": "success",
  "traceId": "747bbf80261844ed85b809212aab0d81.85.17422898158610298",
  "code": 200,
  "data": {
    "amount": "10000",
    "merchantOrderNo": "OrderNoExample",
    "status": 1,
    "tradeNo": "TF2501010001CO0000000000000000"
  }
}
```

```json title=失败示例
{
  "code": 425,
  "data": null,
  "msg": "Insufficient merchant balance",
  "traceId": "747bbf80261844ed85b809212aab0d81.85.17422898158610298"
}
```
