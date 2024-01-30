// import { motion } from "framer-motion"
// export const fadeIn =(direction,delay) => {
//     return{
//         hidden: {
//             y: direction === 'up' ? 40: direction=== 'down' ? -40 : 0,
//             x: direction === 'left' ? 40 : direction === 'right' ? -40: 0,
//         },
//         show: {
//             y:0,
//             x: 0,
//             opacity: 1,
//             transform: {
//                 type: 'tween',
//                 duration: 1.2,
//                 delay: delay,
//                 ease: [0.25,0.25,0.25,0.75],
//             }
//         }
//     }
// }

// variants.js

import { motion } from 'framer-motion'

export const fadeIn =(duration) => {
  return{
    hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}
}

export const fadeOut = (duration) => {
    return{
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}
}

export const fadeIn2 = (duration) => {
    return{
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}
}

export const fadeIn3 =(duration) => {
    return{
      hidden: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  }
  }

  export const fadeIn4 = (duration) => {
    return{
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
}
}



