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
| country          | Country code (e.g., ID) |
| app_code         | Application ID           |

### Supported Payment Types (paymentType)

| Payment Method Name | PaymentType (Parameter) |
|---------------------|-------------------------|
|  ALL IN ONE         | 701                     |


### Request Parameters

| Field            | Type    | Required | Length | Description                     |
|------------------|---------|----------|--------|---------------------------------|
| merchantOrderNo  | String  | yes      | 32     | Merchant order number           |
| paymentType      | Integer | yes      | 20     | Payment type: 【701: ALL IN ONE】 |
| amount           | String  | yes      | 20     | Collection amount (in Ruble)    |
| realName         | String  | yes      | 64     | User's full name                |
| phone            | String  | yes      |        | Phone number 11 digits          |
| sign             | String  | yes      |        | Signature                       |
| callbackUrl      | String  | no       | 200    | Callback URL                    |

#### Sample Request

```json
{
  "merchantOrderNo":"1111111111",
  "paymentType":701,
  "amount": 100,
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
  "msg": "success",
  "code": 200,
  "data": {
    "amount": "100",
    "tradeNo": "TS2405220001MX0000048362685411",
    "merchantOrderNo": "C31412415HkF6U9SnXRrxitBWD647lw7",
    "paymentType": 204,
    "additionalInfo": {},
    "paymentInfo": "Xsdsadsadsad.com",
    "status": 1
  },
  "success": true
}

```