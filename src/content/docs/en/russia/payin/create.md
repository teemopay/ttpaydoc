---
title: Create a Payin Order
description: Merchant requests to create a collection (pay-in) order  
---

### Request URL

| Method | URL                        |
|--------|----------------------------|
| POST   | /api/pay/payment/create/v1 |

### Headers

| Header Parameter | Description             |
|------------------|-------------------------|
| timestamp        | Request timestamp       |
| nonce            | Random value            |
| country          | Country code (e.g., RU) |
| app_code         | Application RU          |

### Supported Payment Types (paymentType)

| Payment Method Name | PaymentType (Parameter) |
|---------------------|-------------------------|
|  ALL IN ONE         | 701                     |


### Request Parameters

| Field            | Type    | Required | Length | Description                                                                                                                                                                                                                                        |
|------------------|---------|----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| merchantOrderNo  | String  | yes      | 32     | Merchant order number                                                                                                                                                                                                                              |
| paymentType      | Integer | yes      | 20     | Payment type: 【701: ALL IN ONE】                                                                                                                                                                                                                    |
| amount           | String  | yes      | 20     | Collection amount (in Ruble)                                                                                                                                                                                                                       |
| realName         | String  | yes      | 64     | User Name. It should not contain special characters. It is recommended to use all capital letters and have a length of at least 2 letters. There is no strict verification required, but it must conform to the normal name format.                |
| phone            | String  | yes      | 11     | Phone number 11 digits                                                                                                                                                                                                                             |
| sign             | String  | yes      |        | Signature                                                                                                                                                                                                                                          |
| callbackUrl      | String  | no       | 200    | Callback URL for payout result; if not provided, defaults to merchant config                                                                                                                                                                                                                                           |

#### Sample Request

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

### Response Parameters

| Field           | Type       | Required | Length | Description                                      |
| --------------- | ---------- | -------- | ------ | ------------------------------------------------ |
| merchantOrderNo | String     | yes      | 32     | Merchant order number                            |
| tradeNo         | String     | yes      | 32     | Platform order number                            |
| amount          | String     | yes      | 32     | Transaction amount                               |
| paymentType     | Int        | yes      | 3      | Payment type                                     |
| paymentInfo     | String     | yes      | 32     | Main payment info (e.g., payment code or number) |
| additionalInfo  | JSONObject | no       |        | Additional (extended) information                |
| status          | Int        | yes      |        | Collection status: 1 = Success, 3 = Failed       |
| errorMsg        | String     | no       |        | Error message (returned only when failed)        |




#### Sample Response

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