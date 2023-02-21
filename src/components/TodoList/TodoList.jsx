import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, toggleCompleted } from 'redux/actions'
import { statusFilters } from 'redux/constants'
import { getState } from 'redux/selectors'
import styled from 'styled-components'

const TodoList = () => {
  const { tasks, filter } = useSelector(getState)
  // const tasks = []
  const dispatch = useDispatch()

  const getFilteredTasks = (tasks, status) => {
    switch (status) {
      case statusFilters.active:
        return tasks.filter(item => !item.completed)
      case statusFilters.completed:
        return tasks.filter(item => item.completed)
      default:
        return tasks;
    }
  }
  const toggleCheck = (id) => {
    dispatch(toggleCompleted(id))
  }

  return (
    <ul>
      <Item>Nothing here</Item>
      {getFilteredTasks(tasks, filter.status).map(({ id, text, completed }) => (
        <Item key={id}>
          <div style={{display: 'flex', flexDirection: "row", alignItems: 'center'}}>
            <CheckBox
              type="checkbox"
              checked={completed}
              onChange={() => toggleCheck(id)}
            />
            <p>{text}</p>
          </div>
          <Btn onClick={() => dispatch(deleteTask(id))}>
            X
          </Btn>
        </Item>))}
      
    </ul>
  )
}

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid #2f2f37;
  justify-content: space-between;
  flex-direction: row;
`

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 10px;
`

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #f44336;
  &:hover {
    background-color: #e2e5e8;
  }
  &:active {
    background-color: #bdbdbd;
  }
`

export default TodoList