export default (state = '/', action) => {
  switch (action.type) {
    case 'UPDATE':
      return action.location
    default:
      return state
  }
}
