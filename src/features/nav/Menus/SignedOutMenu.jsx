import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const SignedOutMenu = ({signIn}) => {
  return (
    <Menu.Item position='right'>
      <Button basic inverted content='Register' />
      <Button
        basic
        inverted
        content='Sign In'
        style={{ marginLeft: '0.5em' }}
        onClick={signIn}
      />
    </Menu.Item>
  )
}

export default SignedOutMenu
