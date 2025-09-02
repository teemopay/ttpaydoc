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
| country     | RU           |
| app_code    | app 编号     |

## 支持支付方式列表（paymentType）

| 支付方式名称 | PaymentType (入参参数)          |
| ------------ |-----------------------------|
| ALL IN ONE   | 701（全部支付方式）                 |

### 请求参数

| 字段            | 类型      | 必需 | 最大长度 | 描述                                                   |
| --------------- |---------| ---- |------|------------------------------------------------------|
| merchantOrderNo | String  | yes  | 32   | 商户订单号                                                |
| paymentType     | Integer | yes  | 20   | 支付方式: 【701: ALL IN ONE】                              |
| amount          | String  | yes  | 20   | 代收金额 【货币:卢布】                                         |
| realName        | String  | yes  | 64   | 用户姓名。不得包含特殊字符，建议使用全大写，长度不少于 2 个字母；无需严格校验，但需符合正常姓名格式。 |
| phone           | String  | yes  | 11   | 手机号 （长度:11位）                                         |
| sign            | String  | yes  |      | 签名                                                   |
| callbackUrl     | String  | no   | 200  | 代收回调地址，若不传, 则以商户配置为准                                 |

```json
{
  "merchantOrderNo":"213213419",
  "paymentType":701,
  "amount":120000,
  "realName": "realName",
  "phone": "00000000000",
  "sign": "you sign"
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
  "code": 200,
  "data": {
    "merchantOrderNo": "213213419",
    "amount": "120000",
    "tradeNo": "TS2508280001RU0000367591928366",
    "paymentType": 701,
    "paymentInfo": "https://rpayzc.com/payin/GG6666/CSRPAYPA25082606201388897224",
    "additionalInfo": {},
    "status": 1,
    "errorMsg": null
  },
  "msg": "success",
  "traceId": "85f383d2d44f4ea5af8352932cb8427b.95.17567121909967183"
}
```
