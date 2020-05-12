import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const COLORS = [
  'var(--red)',
  'var(--purp)',
  'var(--blue)',
  'var(--black)',
  'var(--green)'
]

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0
  })
}

const Slideshow = () => {
  const [[page, direaction], setPage] = useState([0, 0])
  const paginate = (direaction) => {
    setPage([page + direaction, direaction])
  }
  const index = wrap(0, COLORS.length, page)

  return (
    <div style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
      <AnimatePresence custom={direaction}>
        <motion.div
          key={page}
          custom={direaction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{
            height: 400,
            width: '100%',
            background: COLORS[index],
            position: 'absolute',
            left: 0,
            top: 0
          }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x > 400) {
              paginate(-1)
            } else if (offset.x < -400) {
              paginate(1)
            }
          }}
        />
      </AnimatePresence>
      <div style={{ zIndex: 10, position: 'absolute' }}>
        <button onClick={() => paginate(-1)}>{'<-'}</button>
        <button onClick={() => paginate(1)}>{'->'}</button>
      </div>
    </div>
  )
}

export default Slideshow
