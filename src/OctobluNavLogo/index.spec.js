import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import React from 'react'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount, shallow } from 'enzyme'

import OctobluNavLogo from './'

chai.use(chaiEnzyme())
chai.use(sinonChai)

describe('<OctobluNavLogo />', () => {
  describe('when given className', () => {
    it('should merge custom className', () => {
      const sut = mount(<OctobluNavLogo className="foo" />)
      expect(sut).to.have.className('foo')
    })
  })
})
