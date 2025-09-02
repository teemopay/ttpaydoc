---
title: Create a payout order
description: Create a payout order
---

### Request URL

| Method | URL                         |
| ------ | --------------------------- |
| POST   | `/api/pay/payout/create/v1` |


### Headers

| Header Parameter | Description       |
| --------------- | ----------------- |
| timestamp       | Request timestamp |
| nonce           | Random string     |
| country         | Country RU        |
| app_code        | Application code  |



### Request Parameters


| Field           | Type   | Required | Length | Description                                                                                              |
| --------------- | ------ |----------|--------|----------------------------------------------------------------------------------------------------------|
| merchantOrderNo | String | yes      | 32     | Merchant order number                                                                                    |
| amount          | String | yes      | 20     | Payout amount (in Ruble)                                                                                 |
| bankCode        | String | no       | 50     | Bank code                                                                                                |
| bankName        | String | no      | 50     | Bank name                                                                                                |
| accountType     | Int    | yes      |        | 701: TRANSFER                                                                                            |
| bankAccount     | String | yes      | 255    | Card number: 16 digits in length                                                                         |
| realName        | String | yes      | 255    |  User Name. It should not contain special characters. It is recommended to use all capital letters and have a length of at least 2 letters. There is no strict verification required, but it must conform to the normal name format.                                                                                                 |
| phone           | String | yes      | 11     | Phone number 11 digits                                                                                   |
| callbackUrl     | String | no       | 200    | Callback URL for payout result; if not provided, defaults to merchant config                             |
| sign            | String | yes      |        | Signature                                                                                                |




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

### Response Parameters


| Field           | Type   | Required | Length | Description                                           |
| --------------- | ------ | -------- | ------ | ----------------------------------------------------- |
| merchantOrderNo | String | yes      | 32     | Merchant order number                                 |
| tradeNo         | String | yes      |        | Platform order number                                 |
| status          | Int    | yes      |        | Payout status: 1 = Processing, 3 = Failed (can retry) |
| amount          | String | yes      |        | Transaction amount                                    |


```json
{
  "code": 200,
  "data": {
    "merchantOrderNo": "ds111ad111002911111111111131",
    "tradeNo": "TF2405220001MX0000048840060444",
    "amount": "100",
    "status": 1
  },
  "msg": "success",
  "success": true
}

```
