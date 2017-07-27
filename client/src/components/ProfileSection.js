import React from 'react'
import { Card } from 'semantic-ui-react'

const ProfileSection = props => {
  return (
    <Card
      image='/images/dummy-profile.jpg'
      header='Your name here'
      description='Information goes here.'
    />
  )
}

export default ProfileSection
