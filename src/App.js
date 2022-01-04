import { useState, useEffect } from 'react'
import './App.css'
import Toggle from './components/commons/Toggle'
import Card from './components/commons/Card'
import GardenStats from './components/GardenStats'
import Header from './components/Header'
import Alarm from './components/Alarm'
import { config } from './config'
import io from 'socket.io-client'
let socket

const ENDPOINT = config.SOCKET_URL

function App() {
  const [waterStatus, setStatus] = useState(0)
  const [lightStatus, setLightStatus] = useState(0)
  const [temperature, setTemp] = useState(0)
  const [humid, setHumidity] = useState(0)
  const [timerInfo, setTimerInfo] = useState({
    status: false,
    duration: 15,
    time: '12:00:00'
  })

  useEffect(() => {
    socket = io(ENDPOINT, { transports: ['websocket'] })

    socket.emit('join', (error) => {
      if (error) {
        alert(error)
      }
    })
  }, [ENDPOINT])

  useEffect(() => {
    socket.on('message', (message) => {
      console.log('Message:', message)
    })

    socket.on('status', (response) => {
      // console.log('Status:',response);
      const { temperature, humidity, water } = JSON.parse(response)
      setTemp(temperature)
      setHumidity(humidity)
      setStatus(water)
    })
  }, [])

  const onStatusChangeHandler = (value) => {
    const status = value ? '1' : '0'
    socket.emit('set-water', status)
    setStatus(value)
  }
  const onLightStatusChangeHandler = (value) => {
    const status = value ? '1' : '0'
    socket.emit('set-light', status)
    setLightStatus(value)
  }

  const onSetTimerHandler = () => {
    socket.emit('set-timer', JSON.stringify(timerInfo))
  }

  return (
    <div
      className={`tracking-widest bg-gray-800 lg:bg-gray-900 App bg-blend-overlay ${
        waterStatus ? '' : ''
      }`}
    >
      <div className={`z-10 container p-6 py-8`}>
        <Header />
        <GardenStats temperature={temperature} humidity={humid} />
        <div
          className={`flex items-center justify-center w-full p-2 my-4 bg-gray-900 border border-gray-900 shadow-md h-28 shadow-gray-800 rounded-2xl`}
        >
          <Toggle
            id="water-status"
            title="Smart Water"
            toggleStatus={waterStatus}
            onStatusChange={onStatusChangeHandler}
            size="m"
            type="h"
          />
        </div>
        <div
          className={`flex items-center justify-center w-full p-2 my-4 bg-gray-900 border border-gray-900 shadow-md h-28 shadow-gray-800 rounded-2xl`}
        >
          <Toggle
            id="light-status"
            title="Smart Lights"
            toggleStatus={lightStatus}
            onStatusChange={onLightStatusChangeHandler}
            size="m"
            type="h"
          />
        </div>
        <Card
          cardTitle="Live stream"
          cardSubtitle="Connect with your garden"
          thumbnailImgSrc="/garden.svg"
        >
          <img src={config.STREAM_URL} className="w-full h-4/5" />
          <span className="block pt-2 mt-4 text-xs text-center text-white h-1/5">
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </span>
        </Card>
        <Card
          cardTitle="Alarm"
          cardSubtitle="Automate meal for garden"
          thumbnailImgSrc="/alarm.svg"
        >
          <Alarm
            timerInfo={timerInfo}
            setTimerInfo={setTimerInfo}
            onSetTimerHandler={onSetTimerHandler}
          />
        </Card>
      </div>
    </div>
  )
}

export default App
