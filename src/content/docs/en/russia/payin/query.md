---
title: Payment Query
description: Merchant queries the status of a payment order
---

### Request URL

| method | url                       |
| ------ | ------------------------- |
| POST   | /api/pay/payment/query/v1 |

### Header Information

| Header Parameter | Description       |
| --------------- |-------------------|
| timestamp      | Request timestamp |
| nonce          | Random value      |
| country        | Country code (RU) |
| app_code       | Application RU    |

### Request Parameters

| Field           | Type   | Required | Length | Description           |
| --------------- | ------ | -------- | ------ | --------------------- |
| merchantOrderNo | String | yes      | 32     | Merchant order number |
| sign           | String | yes      |        | Signature            |

```json title="Request Example"
{
  "merchantOrderNo": "OrderNoExample",
  "sign": "YOUR_SIGN"
}
```

### Response Parameters

| Parameter                     | Type   | Required | Length | Description                                                                                                              |
| ---------------------------- | ------ | -------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| merchantOrderNo              | String | yes      | 32     | Merchant order number                                                                                                    |
| tradeNo                      | String | yes      |        | Platform order number                                                                                                    |
| paymentType                  | Int    | yes      |        | Payment type |
| transactionAmount            | String | yes      |        | Order transaction amount                                                                                                 |
| amount                       | String | yes      |        | Payment amount                                                                                                           |
| status                       | String | yes      |        | 2-Success 3-Failed 4-Refund                                                                                              |
| remark                       | String | no       |        | Remarks                                                                                                                  |
| statementList                | Object | no       |        | Payment transaction information                                                                                          |
| -- paymentSingleOrderNo      | String | yes      |        | Single payment transaction number                                                                                        |
| -- paymentStatementAmount    | String | yes      |        | Single payment amount                                                                                                    |
| -- paymentStatementStatus    | Int    | yes      |        | Single payment transaction status: 2-Payment Success 3-Payment Failed 4-Refund                                            |
| -- paymentStatementStatusName| String | yes      |        | Transaction status name                                                                                                  |
| -- message                   | String | no       |        | Transaction message                                                                                                      |
| sign                         | String | yes      |        | Signature                                                                                                                |

```json title="Response Example"
{
  "code": 200,
  "data": {
    "merchantOrderNo": "OrderNoExample",
    "amount": "60000.00",
    "transactionAmount": "60000.00",
    "tradeNo": "TS2501010001ID0000000000000000",
    "paymentType": 701,
    "paymentInfo": "https://www.paymentLinkExample.com",
    "status": 2,
    "serviceAmount": "605.00",
    "statementList": [
      {
        "paymentSingleOrderNo": "TSOPaymentOrderNoExample",
        "paymentStatementAmount": "60000.00",
        "paymentStatementStatus": 2,
        "paymentStatementStatusName": "代收成功",
        "completeTime": "2025-01-01 00:00:00",
        "serviceAmount": "605.00",
        "serviceRate": "0.0100",
        "immService": "5.00",
        "paymentType": 701
      }
    ]
  },
  "msg": "success",
  "traceId": "0801113131dd4951a36d19022a31b303.94.17423567008990449"
}
```