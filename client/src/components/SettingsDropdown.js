import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const choices = [
    { key: 'update', value: 'update', text: 'Update profile' }
  , { key: 'rain', value: 'rain', text: 'Make it rain!' }
]

class SettingsDropdown extends React.Component {

  makeItRain = () => {
    let container = document.getElementById('moneyContainer') //getContainer
    let i = 0
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); //getViewport
    let getRandomInt = (min, max) => { //random Func
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min)) + min
    }

    let interval = setInterval(function() {

      // this generates the dollar sign
      container.insertAdjacentHTML('beforeEnd', `<i id="${i}" class="huge dollar icon moneyMoney" style="left: ${getRandomInt(0, w)}px"></i>`)

      let dollar = document.getElementById(i)

      // this fires the animation
      setTimeout(() => {
        dollar.className += ' doAnimate'
      }, 88)

      // this does it 200 times
      i += 1
      if (i >= 200) {
        clearInterval(interval)
        i = 0
      }
    }, 13)
  }

  handleSetting = (e, data) => {
    if (data.value === 'rain') {
      this.makeItRain()
    } else if (data.value === 'update') {
      console.log('Time to update profile.')
    }
  }

  render() {
    return (
      <Dropdown placeholder="Settings" onChange={this.handleSetting} options={choices} icon='settings' fluid floating labeled button className='icon settings-icon' />
    )
  }

}

export default SettingsDropdown
