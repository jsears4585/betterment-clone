import React from 'react'
import { Card } from 'semantic-ui-react'

const ProfileSection = props => {
  return (
    <Card
      image={props.imageLink}
      header={props.userTotal}
    />
  )
}

export default ProfileSection
