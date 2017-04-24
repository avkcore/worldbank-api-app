const express = require('express')
const request = require('request')

const app = express()
const port = process.env.PORT || 3000

app.use('/', (req, res) => {
  const url = 'http://api.worldbank.org' + req.url
  req.pipe(request(url)).pipe(res)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
})

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
})

