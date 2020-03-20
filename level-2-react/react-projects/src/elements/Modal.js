import React, { Component } from 'react'
import styled from 'styled-components'
import { Portal, absolute } from 'utilities'
import { Icon } from 'elements'
import { Card } from 'elements/Cards'

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <>{children}</>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  ${absolute({})}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled(Card)`
  position: relative;
  min-width: 320px;
  z-index: 1;
  margin-bottom: 100px;
`

const CloseButton = styled.button`
  ${absolute({ x: 'right' })}
  border: none;
  background: transparent;
  padding: 10px;
  cursor: pointer;
`

const Background = styled.div`
  ${absolute({})}
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.3;
`
