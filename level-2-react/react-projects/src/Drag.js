import React, { Component } from 'react'
import styled from 'styled-components'
import { Gesture } from 'react-with-gesture'
import { animated, interpolate, Spring } from 'react-spring/renderprops'
import { Card } from './elements'

const AnimCard = Card.withComponent(animated.div)

const CardContainer = styled(animated.div)`
  position: relative;
  background-color: #efefef;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 5px;
`

const DragCard = styled(AnimCard)`
  height: 300px;
`

export default class Drag extends Component {
  onUp = xDelta => () => {
    if (xDelta < -300) {
      console.log('remove')
    } else if (xDelta > 300) {
      console.log('accept')
    }
  }

  render() {
    return (
      <Gesture>
        {({ down, delta: [xDelta] }) => (
          <Spring
            native
            to={{ x: down ? xDelta : 0 }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <CardContainer
                style={{
                  backgroundColor: x.interpolate({
                    range: [-300, 300],
                    output: ['#ff1c68', '#14d790'],
                    extrapolate: 'clamp'
                  })
                }}
              >
                <DragCard
                  onMouseUp={this.onUp(xDelta)}
                  onTouchEnd={this.onUp(xDelta)}
                  style={{
                    opacity: x.interpolate({
                      range: [-300, -100],
                      output: [0, 1],
                      extrapolate: 'clamp'
                    }),
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: 'clamp'
                        })
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  }}
                >
                  <h1>Drag Me</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    )
  }
}
