// const url = 'http://localhost:3000/countries/ua;us/indicators/NY.GDP.MKTP.CD?date=2013:2015&format=json'
// const url = 'http://localhost:3000/countries?per_page=30&MRV=304&pages=all&format=json&prefix=?'
// const url = 'http://localhost:3000/countries?lendingType=IDX&format=json'
// const cUrl = 'https://restcountries.eu/rest/v2/name/rus?fullText=false'

// const decoder = new TextDecoder()

// fetch(url)
//   .then(res => {
//     const reader = res.body.getReader()
//     reader.read()
//       .then(function process(data) {
//         console.log(data.done)
//         if (data.done) {
//           return console.log('fetch done')
//         }
//         console.log(decoder.decode(data.value, { stream: true }))

//         return reader.read().then(process)
//       })
//   })

// $('#country').on('input', (e) => {
//   const cUrl = `https://restcountries.eu/rest/v2/name/${e.target.value}?fullText=false`
//   if (!e.target.value) return
//   fetch(cUrl).then(response => {
//     response.json().then(data => {
//       console.log(data)
//     })
//   })
// })

// fetch(countriesUrl).then(response => {
//   console.log(response)
//   response.json().then(data => {
//     console.log(data)
//     const country = data.find(o => o.name === 'Ukraine').alpha2Code
//     const bankUrl = `http://localhost:3000/countries/${country}/indicators/NY.GDP.MKTP.CD?date=2013:2015&format=json`
//     fetch(bankUrl).then(res => {
//       res.json().then(bankData => {
//         console.log(bankData)
//       })
//     })
//   })
// })

const countriesUrl = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag'

const getCountries = url => {
  if (localStorage.getItem('countries')) {
    return new Promise((resolve, reject) => 
      resolve(JSON.parse(localStorage.getItem('countries')))
    )
  }
  return fetch(url).then(res => {
    return res.json()
  })
}

const bankData = (url) => {
  return fetch(url).then(res => {
    return res.json()
  })
}

const cacheCountries = countries => {
  if (localStorage.getItem('countries')) {
    return;
  }
  localStorage.setItem('countries', JSON.stringify(countries))
}

getCountries(countriesUrl)
  .then(res => {
    cacheCountries(res)
    const country = res.find(o => o.name === 'Ukraine').alpha2Code
    const url = `http://localhost:3000/countries/${country}/indicators/NY.GDP.MKTP.CD?date=2013:2015&format=json`
    return bankData(url)
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))