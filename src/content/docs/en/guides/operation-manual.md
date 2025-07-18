---
title: Operation Manual
description: TTpay Operation Manual
---

## Backend Management System

The backend management system of the merchant contains five parts: home page, transaction center, financial center, download center, and merchant center.
The following are the introduction to each module:

### Home Page

The home page mainly shows the merchant's account balance and transaction data. If you have business cooperation with TTpay in multiple countries, you can switch the account data of the country you want to view in the upper right corner.

![Home Page](/src/assets/home/en/20250718-104640.388-1.jpg)

### Transaction Center

The transaction center mainly shows the merchant's transaction data, including transaction type, transaction amount, transaction time, and transaction status.

1. Payin Order
   The transaction center payin order shows the payin orders created by the merchant's program through API requests. You can search and verify the status and amount of the specified order by clicking the "Details" button. In some cases, an order is created, but the user can make multiple payments. To view such sub-orders, click the "Details" button.

   ![Payin Order](/src/assets/home/en/20250718-104640.388-7.jpg)

2. Payout Order
   The transaction center payout order shows the payout orders created by the merchant's program through API requests. You can search and verify the status and amount of the specified order.

   ![Payout Order](/src/assets/home/en/20250718-104640.388-2.jpg)

### Financial Center

1. Fund Management
   The financial center fund management is the merchant's account balance information display page. You can initiate: recharge, withdrawal, merchant transfer order, to manage the funds. Once you initiate the order, our financial staff will process it as soon as possible. If you want to expedite, please contact our business staff after submitting. It is worth mentioning that when you initiate a merchant transfer, knowing the other merchant's account number will be very important.

   ![Fund Management](/src/assets/home/en/20250718-104640.388-3.jpg)

2. Account Details
   The financial center account details is the merchant's account transaction flow information display page. The transaction flow is generated after the transaction is completed, and the system will calculate and display it by day. You can view the daily inflow and outflow amounts and various fund data for the previous day and before on this page.

   ![Account Details](/src/assets/home/en/20250718-104640.388-4.jpg)

### Download Center

1. Download List
   Generally, the merchant's daily order data or other data will be very large, in order to provide a better export experience for the merchant (not to occupy the time of browsing pages or switching to other pages, not to make you feel stuck when exporting), we use asynchronous export. After you initiate the export, you only need to wait a moment, then switch to the download center to download the data file.

   ![Download List](/src/assets/home/en/20250718-104640.388-5.jpg)

### Merchant Center

1. Application List
   When you start using TTpay, in the integration layer, we need to agree on the callback address for payin and payout, so that we can push the transaction results to you. The application name has no special naming requirements, it is just a name used to identify the integration layer from which application the payin and payout are initiated, you can use this to split different business lines, products, or services, etc.

   After creating the application, enter the details and click "Exchange Public Key" to save the TTpay platform public key and fill in your public key. In addition, it is recommended that you add the server IP address to the payin and payout IP whitelist to ensure the security of the transaction process.

   This setting step is recommended to be completed by your development staff.

   ![Application List](/src/assets/home/20250718-102242.jpeg)

   ![Application Details](/src/assets/home/20250718-102333.jpeg)

2. Merchant Information
   The merchant information page in the merchant center displays your (merchant) basic information, which is convenient for you to view the payin and payout payment methods and fees (rates) that TTpay has opened for you.

   ![Merchant Information](/src/assets/home/20250718-102435.jpeg)

## Test Environment Manual Simulation Callback

To ensure the process is correct and your funds are safe, during the integration and debugging process, it is recommended to test as many cases as possible, including:

- Payin and payout order creation success and failure;
- Transaction result callback success and failure;
- Possible order status reversal (success followed by failure);

In the "Payin Order" and "Payout Order" list in the transaction center, you can initiate a simulated callback for orders in the "In Progress" status. After you create an order through the API, click the "Simulate Callback" button in the background page to callback. If you need to test status reversal, you need our test staff to manually callback for you. (Special note: For the Pakistan checkout, after creating it, you need to submit the form in the checkout, the order will enter the "In Progress" status, at this time you can simulate the callback.)

![Payin Order](/src/assets/home/20250718-102702.jpeg)

![Payout Order](/src/assets/home/20250718-102753.jpeg)

## Appendix

> The following are some TG bot commands. For specific commands, please refer to the TG bot after the production environment is activated

- Query order command: /order <order_number> or /o <order_number>
- Query balance command: /balance or /b
- Help command: /help or /h
