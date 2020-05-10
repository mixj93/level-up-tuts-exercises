import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
            style={{ overflow: 'hidden' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
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
