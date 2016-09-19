import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import OctobluNavLogo from '../src'

storiesOf('OctobluNavLogo', module)
  .addWithInfo('Basic', 'added Description', () => (
    <OctobluNavLogo />
  ), { inline: true })
  .add('Basic', () => (
    <OctobluNavLogo />
  ))
