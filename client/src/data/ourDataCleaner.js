function refactorData(data){
  let bigData = data['Time Series (Daily)']

  let ourData = {}

  for (date in bigData) {
    ourData[date] = bigData[date]['4. close']
  }

  console.log(ourData)
}

function fetchHistory(ticker) {
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=full&apikey=NZDF2WF8T76KP1F6`)
    .then(res => res.json())
    .then(res => refactorData(res))
}

// 'Store as Global Variable', then copy(JSON.stringify(temp1))
