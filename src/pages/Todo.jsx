import TodoFilter from 'components/TodoFilter/TodoFilter'
import TodoInputBar from 'components/TodoInputBar/TodoInputBar'
import TodoList from 'components/TodoList/TodoList'
import TodoStatus from 'components/TodoStatus/TodoStatus'
import React from 'react'
import styled from 'styled-components'

const Todo = () => {
  return (
      <PageCont>
          <PHeaderCont>
              <TodoStatus />
              <TodoFilter />
          </PHeaderCont>
          <TodoInputBar />
          <TodoList/>
      </PageCont>
  )
}

const PageCont = styled.div`
    display: flex;
    flex-direction: column;
    /* align-content: center; */
    /* justify-content: center; */
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 100px 0;
`

const PHeaderCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 15px;
`

export default Todo