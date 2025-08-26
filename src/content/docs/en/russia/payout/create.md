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
| country         | Country ID        |
| app_code        | Application code  |



### Request Parameters


| Field           | Type   | Required | Length | Description                                                                 |
| --------------- | ------ |----------| ------ |-----------------------------------------------------------------------------|
| merchantOrderNo | String | yes      | 32     | Merchant order number                                                       |
| amount          | String | yes      | 20     | Payout amount (in IDR), integer only                                        |
| bankCode        | String | no       | 50     | Bank code                                                                   |
| bankName        | String | no      | 50     | Bank name                                                                   |
| accountType     | Int    | yes      |        | 701: TRANSFER                                                               |
| bankAccount     | String | yes      | 255    | When accountType is 701, this parameter transmits the recipient's phone number. The length is 11 digits.                                                                            |
| realName        | String | yes      | 255    | Account holder's name                                                       |
| phone           | String | yes      | 10-13  | Phone number 11 digits                           |
| callbackUrl     | String | no       | 200    | Callback URL for payout result; if not provided, defaults to merchant config |
| sign            | String | yes      |        | Signature                                                                   |




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
