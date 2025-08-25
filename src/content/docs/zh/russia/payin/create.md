---
title: 创建代收
description: 商户请求创建一个代收订单
---

### 请求地址

| method | url                        |
| ------ | -------------------------- |
| POST   | /api/pay/payment/create/v1 |

### 头部信息（header）

| header 参数 | 入参参数描述 |
| ----------- | ------------ |
| timestamp   | 请求时间戳   |
| nonce       | 随机值       |
| country     | ID           |
| app_code    | app 编号     |

## 支持支付方式列表（paymentType）

| 支付方式名称 | PaymentType (入参参数)          |
| ------------ |-----------------------------|
| ALL IN ONE   | 701（全部支付方式）                 |

### 请求参数

| 字段            | 类型   | 必需 | 最大长度 | 描述                                                      |
| --------------- | ------ | ---- | -------- |---------------------------------------------------------|
| merchantOrderNo | String | yes  | 32       | 商户订单号                                                   |
| paymentType     | Int    | yes  |          | 支付方式: 701                                               |
| amount          | String | yes  | 20       | 代收金额 （卢布）                                               |
| realName        | String | yes  | 64       | 用户姓名                                                    |
| phone           | String | yes  | 13       | 手机号 11位                                                 |
| sign            | String | yes  |          | 签名                                                      |
| callbackUrl     | String | no   | 200      | 回调地址                                                    |

```json
{
  "merchantOrderNo":"********",
  "paymentType":701,
  "amount": 100,
  "realName": "realName",
  "phone": "00000000000",
  "sign": "*******"
}
```

### 返回参数

| 字段            | 类型       | 必需 | 长度 | 描述                                                     |
| --------------- | ---------- | ---- | ---- | -------------------------------------------------------- |
| merchantOrderNo | String     | yes  | 32   | 商户订单号                                               |
| tradeNo         | String     | yes  | 32   | 平台订单号                                               |
| amount          | String     | yes  | 32   | 交易金额                                                 |
| paymentType     | Int        | yes  | 3    | 支付方式                                                 |
| paymentInfo     | String     | yes  | 32   | 主要付款信息，返回的是实际用于付款的信息，例如：付款编号 |
| additionalInfo  | JSONObject | no   |      | 扩展信息                                                 |
| status          | Int        | yes  |      | 1-订单创建成功 3-失败                                    |
| errorMsg        | String     | no   |      | 错误信息,失败时返回                                      |

```json
{
  "msg": "success",
  "traceId": "747bbf80261844ed85b809212aab0d81.85.17422898158610299",
  "code": 200,
  "data": {
    "amount": "60000.00",
    "tradeNo": "TS2501010001ID0000000000000000",
    "additionalInfo": {},
    "merchantOrderNo": "OrderNoExample",
    "paymentInfo": "https://www.paymentLinkExample.com",
    "paymentType": 502,
    "status": 1
  }
}
```
