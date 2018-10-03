export default (state = false, { type }) => {
  switch (type) {
    case 'CLICK':
      if (state === false) return true
      else if (state === true) return false
      break
    default:
      return state
  }
}
