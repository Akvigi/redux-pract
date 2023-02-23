import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setStatusFilter } from 'redux/actions'
import { statusFilters } from 'redux/constants'
import { setStatusFilter } from 'redux/filterSlice'
import { getFilter } from 'redux/selectors'
import styled from 'styled-components'

const TodoFilter = () => {
    const status = useSelector(getFilter)
    const dispatch = useDispatch()
    return (
      <Cont>
          <h3>Filter by status</h3>
          <List>
              <li>
                    <Btn className={status === statusFilters.all ? 'isSelected' : ''}
                        onClick={() => dispatch(setStatusFilter(statusFilters.all))}>All</Btn>
              </li>
              <li>
                    <Btn className={status === statusFilters.active ? 'isSelected' : ''}
                        onClick={() => dispatch(setStatusFilter(statusFilters.active))}>Active</Btn>
              </li>
              <li>
                    <Btn className={status === statusFilters.completed ? 'isSelected' : ''}
                        onClick={() => dispatch(setStatusFilter(statusFilters.completed))}>Completed</Btn>
              </li>
          </List>
      </Cont>
    )
}

const Cont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 225px;
`

const List = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 225px;
    width: 100%;
`

const Btn = styled.button`
    display: inline-flex;
    padding: 8px 12px;
    border-radius: 4px;
    border: none;
    font: inherit;
    cursor: pointer;
    background-color: #e2e5e8;
    color: inherit;
    &.isSelected {
        background-color: #58a0e8;
        color: #fff;
    }
    &:hover {
        background-color: #1976d2;
        color: #fff;
    }
    &:active {
        background-color: #1565c0;
        color: #fff;
    }
`

export default TodoFilter