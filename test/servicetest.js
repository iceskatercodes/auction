const entsvc = 'http://localhost:2900/entitlements'
const got = require('got')

async function servicetest() {
  const url = `${entsvc}/ping`
  let r = await got.get(url)
  console.log(r.body)
}

servicetest()