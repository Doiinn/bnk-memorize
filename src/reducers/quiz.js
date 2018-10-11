let initialState = {
  answer: 0,
  choice: [],
  timer: 60,
  correct: 0,
  wrong: 0,
  score: 0,
  isPicShow: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'DECREASE_SECOND':
      return Object.assign({}, state, {
        timer: state.timer - 1
      })
    case 'ZERO_SECOND':
      return Object.assign({}, state, {
        timer: 0
      })
    case 'CORRECT_CHOICE':
      return Object.assign({}, state, {
        correct: state.correct + 1,
        score: state.score + 1
      })
    case 'WRONG_CHOICE':
      return Object.assign({}, state, {
        wrong: state.wrong + 1
      })
    case 'CLOSE_PICTURE':
      return Object.assign({}, state, {
        isPicShow: false
      })
    case 'RANDOM_CHOICE':
      return Object.assign({}, state, {
        answer: action.answer, choice: action.choice, isPicShow: true
      })
    case 'RESET':
      return initialState
    default:
      return state
  }
}
