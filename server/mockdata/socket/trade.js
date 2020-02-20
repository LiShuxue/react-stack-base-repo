const Mock = require('mockjs');

module.exports = () => {
  return Mock.mock({
    trade: [
      {
        sourceSystem: 'Blade',
        'id|15': /[a-z0-9]/,
        productType: 'FXOPTSMP',
        'packageId|1': ['1583765', '', '', '', ''],
        portfolio: 'OP_GBL_EUR',
        'dealer|1': ['Andy', 'Bob', 'Cindy', 'Dominic', 'Edward', 'Frank', 'George', 'Henry'],
        'counterparty|1': ['DRESB/FRA', 'COMBA/FRA'],
        currencyPair: 'USD/EUR',
        'buySell|1': ['Buy', 'Sell'],
        'strike|1.4': 1,
        expiryDate: Mock.Random.now('day', 'yyyyMMdd'),
        tradeDate: Mock.Random.now('day', 'yyyyMMdd'),
        'notional1|1000000-50000000': 1000000,
        'notional2|1000000-50000000': 1000000,
        'lastEvent|1': [
          'NA',
          'Economic Change',
          'Economic Change',
          'Economic Change',
          'Dealer Error',
          'Full termination',
          'Clearing'
        ],
        'foStatus|1': ['Hold', 'To be sent', 'Sent', 'Confirmed', 'Confirmed', 'Confirmed', 'Released'],
        'confirmationStatue|1': [
          'Initial',
          'Pending Dispatch Ack',
          'Confirmed',
          'Confirmed',
          'Confirmed',
          'Mismatched',
          'NA'
        ],
        'settlementStatus|1': ['NA', 'NA', 'NA', 'Settlement Error', 'Initial', 'Released', 'Released'],
        'exceptions|1': [
          'SSI enrichment failed, reference data missing',
          'Onshore/offshore currency mapping failed, reference data missing for MYO(or PHO, KRO)',
          'Unmatched manually in CDU, pending economics correction in Blade',
          'Blocked , last event fixing has not been Acked from CDU',
          'EDMI connection issue. Unable to open connection to host ‘uklvauedm01a.uk.standardchartered.com’. Error ‘java.net.ConnectionException: Connection refused {Connection refused}’ was reported by the socket call'
        ],
        'replayable|1': [true, true, true, false],
        isSuccess: false
      }
    ]
  });
};
