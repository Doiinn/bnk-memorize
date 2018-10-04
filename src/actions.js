export const increment = (score = 1) => ({
  type: 'INCREMENT',
  score
})

export const decrement = (score = -1) => ({
  type: 'DECREMENT',
  score
})

export const sidenavmenu = () => ({
  type: 'CLICK'
})

export const updateLocation = (location) => ({
  type: 'UPDATE',
  location
})
