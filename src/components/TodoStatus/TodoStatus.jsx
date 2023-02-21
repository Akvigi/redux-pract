import React from 'react'
import { useSelector } from 'react-redux'
import { getTasks } from 'redux/selectors'
import styled from 'styled-components'

const TodoStatus = () => {
  const tasks = useSelector(getTasks)
  const { active, completed } = tasks.reduce((acc, item) => {
    item.completed ? acc.completed += 1 : acc.active += 1
    return acc
  }, { active: 0, completed: 0 })
  // const checkStore = () => {
  //   let store = {
  //     active: 0,
  //     completed: 0
  //   }
  //   tasks.map(item => item.completed ? store.active += 1 : store.completed += 1)
  //   return store 
  // } 

  return (
      <div>
          <h3>Tasks</h3>
          <ul>
              <Item>
                <Text>active: </Text>
                <span>{active}</span>
              </Item>
              <Item>
                <Text>completed:</Text>
                <span>{completed}</span>
              </Item>
          </ul>
      </div>
  )
}

const Item = styled.li`
    display: flex;
    flex-direction: row;
`

const Text = styled.p`
  margin-right: 10px;
`


export default TodoStatus