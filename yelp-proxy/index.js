const express = require('express')
const cors = require('cors')
const app = express()
const axios = require('axios')
const URLParser = require('url').parse;
const port = 3000

app.use(cors())

let config = {
  headers: {
    Authorization: "Bearer SPlOW5mPO6FHbiwobWsp5xnPlohewSzdV9LNLTZ6xOXhBix3tbexOCaoMb2pTpLlNa4127b6Kj1hfyHqM3iu0KK6fuLEad4mDsCUhfMTxEPyEr55UGkK75FpQ8KhW3Yx"
  }
}


app.get('/', (req, res) => {
  
  let url = `https://api.yelp.com/v3/businesses/search?${URLParser(req.url).query}`;
  console.log("URL:", url)
  axios.get(url, config)
    .then(response => { 
      console.log('RESPONSE YELP:', response.data);
      res.json(response.data);
    })
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



