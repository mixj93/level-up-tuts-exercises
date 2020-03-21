import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition, animated, config } from 'react-spring/renderprops'
import { Portal, absolute } from 'utilities'
import { Icon } from 'elements'
import { Card } from 'elements/Cards'

export default class Modal extends Component {
  render() {
    const { on, toggle, children } = this.props
    return (
      <Portal>
        <Transition
          items={on}
          unique
          native
          config={config.gentle}
          from={{ opacity: 0, bgOpacity: 0, y: -50 }}
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }}
          leave={{ opacity: 0, bgOpacity: 0, y: -50 }}
        >
          {on =>
            on &&
            (styles => (
              <ModalWrapper>
                <ModalCard
                  style={{
                    opacity: styles.opacity,
                    transform: styles.y.interpolate(
                      y => `translate3d(0, ${y}px, 0)`
                    )
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <>{children}</>
                </ModalCard>
                <Background
                  style={{ opacity: styles.bgOpacity }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
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
const AnimCard = Card.withComponent(animated.div)
const ModalCard = styled(AnimCard)`
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

const Background = styled(animated.div)`
  ${absolute({})}
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`
