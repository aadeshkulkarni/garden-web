import { config } from '../config'
const API_ENDPOINT = config.API_URL

/* This is legacy code, not used anymore */
async function srSetStatus(value) {
  try {
    const response = await fetch(
      `${API_ENDPOINT}/set-status?value=${value ? 1 : 0}`
    )
    console.log(response)
  } catch (ex) {
    console.log(ex)
  }
}
async function srGetStatus() {
  try {
    const response = await fetch(`${API_ENDPOINT}/status`)
    console.log(response)
    return response
  } catch (ex) {
    console.log(ex)
  }
}

async function srSetTimer(timerObj) {
  try {
    const response = await fetch(`${API_ENDPOINT}/set-timer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: timerObj })
    })
    console.log(response)
    return response
  } catch (ex) {
    console.log(ex)
  }
}
async function srGetDHTStatus() {
  try {
    const response = await fetch(`${API_ENDPOINT}/dht-status`)
    const data=await response.json();
    return data
  } catch (ex) {
    console.log(ex)
  }
}


export { srSetStatus, srGetStatus,srGetDHTStatus, srSetTimer }
