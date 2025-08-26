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
| country     | ID           |
| app_code    | app 编号     |

### 请求参数

| 字段            | 类型      | 必需  | 最大长度 | 描述                                      |
| --------------- |---------|-----|------|-----------------------------------------|
| merchantOrderNo | String  | yes | 32   | 商户订单号                                   |
| amount          | String  | yes | 20   | 代付金额,印尼盾,整数                             |
| bankCode        | String  | no  | 50   | 银行编码                                    |
| bankName        | String  | no | 50   | 银行名称                                    |
| accountType     | Integer | yes | 10   | 701:银行转帐                                |
| bankAccount     | String  | yes | 255  | (1. accountType=701时,此参数传递收款人的电话号码.长度11位) |
| realName        | String  | yes | 255  | 用户姓名                                    |
| phone           | Stirng  | yes | 13   | 用户电话                                    |
| callbackUrl     | String  | no  | 200  | 代付回调地址，若不传, 则以商户配置为准                    |
| sign            | String  | yes |      | 签名                                      |

```json
{
  "merchantOrderNo": "11111111111",
  "amount": "1000",
  "accountType": "701",
  "bankAccount": "11111111111",
  "realName": "realName",
  "phone": "11111111111",
  "sign": "YOUR_SIGN"
}
```

### 返回参数

| 参数            | 类型      | 必需 | 长度 | 描述                                   |
| --------------- |---------| ---- | ---- | -------------------------------------- |
| merchantOrderNo | String  | yes  | 32   | 商户订单号                             |
| tradeNo         | String  | yes  |      | 平台订单号                             |
| status          | Integer | yes  |      | 代付状态,1:支付中 3:失败(可以重新发起) |
| amount          | String  | yes  |      | 交易金额                               |

```json title=成功示例
{
  "msg": "success",
  "traceId": "747bbf80261844ed85b809212aab0d81.85.17422898158610298",
  "code": 200,
  "data": {
    "amount": "10000.00",
    "merchantOrderNo": "OrderNoExample",
    "status": 1,
    "tradeNo": "TF2501010001ID0000000000000000"
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
