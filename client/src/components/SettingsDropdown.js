import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const choices = [
    { key: 'update', value: 'update', text: 'Update profile' }
  , { key: 'rain', value: 'rain', text: 'Make it rain!' }
]

const SettingsDropdown = () => (
  <Dropdown placeholder="Settings" options={choices} icon='settings' fluid floating labeled button className='icon settings-icon' />
)

export default SettingsDropdown
