export const sidenavmenu = () => ({
  type: 'CLICK'
})

export const updateLocation = (location) => ({
  type: 'UPDATE',
  location
})

export const decreaseSecond = () => ({
  type: 'DECREASE_SECOND'
})

export const timeOut = () => ({
  type: 'ZERO_SECOND'
})

export const correct = () => ({
  type: 'CORRECT_CHOICE'
})

export const wrong = () => ({
  type: 'WRONG_CHOICE'
})

export const closePic = () => ({
  type: 'CLOSE_PICTURE'
})

export const randomChoice = (answer, choice) => ({
  type: 'RANDOM_CHOICE',
  answer,
  choice
})

export const reset = () => ({
  type: 'RESET'
})
