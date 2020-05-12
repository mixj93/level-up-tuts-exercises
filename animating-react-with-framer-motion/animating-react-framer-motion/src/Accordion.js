import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 }
}

const Accordion = () => {
  const [isToggled, setToggle] = useState(false)
  return (
    <article>
      <h2 role="button" onClick={() => setToggle((prevStete) => !prevStete)}>
        The Heading
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: 'hidden' }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              excepturi quidem, maxime id obcaecati libero veritatis placeat
              optio accusantium amet dolorem nihil beatae quas deleniti
              doloremque eligendi officiis eum maiores!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

export default Accordion
