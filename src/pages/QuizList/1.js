import React from 'react'
import { Background } from '../../components/Background'
// import pic from '../statics/pics/bnk48/gen2/small/all-members.jpg'
import member from '../../quiz-data/bnk-gen2.json'

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

export default () => {
  const dataName = (member.data).map((values, index, array) => {
    return values.name
  })
  
  // eslint-disable-next-line
  const ListItem = (props) => {
    // return <li>{props.value}</li>
    // eslint-disable-next-line
    return <img src={props.value} />
  }

  const NumberList = (props) => {
    const numbers = props.numbers
    const random = getRandomInt(27)
    let choice = []
    // let used = []
    while (choice.length !== 4) {
      let inRandom = getRandomInt(27)
      if (!(inRandom in choice)) {
        choice.push(inRandom)
      }
    }

    console.log(choice)
    return (
      // <ul>
      //   {numbers.map((number) =>
      //     <ListItem key={number.toString()} value={number} />
      //   )}
      // </ul>
      <div>
        <img src={numbers[random]} alt="Who ?"/>
        <p>{dataName[random]}</p>
        <p>{dataName[getRandomInt(27)]}</p>
        <p>{dataName[getRandomInt(27)]}</p>
        <p>{dataName[getRandomInt(27)]}</p>
      </div>
    )
  }
  // for (let index in member.data) {
  //   console.log(member.data[index])
  // }

  const data = (member.data).map((values, index, array) => {
    return values.pic
  })

  return (
    <Background color="#FFD7F9">
      <NumberList numbers={data} />
    </Background>
  )
}
