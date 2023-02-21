import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from 'redux/actions'
import styled from 'styled-components'

const TodoInputBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (e) => {
        e.preventDefault()
        setText('')
        dispatch(addTask(text))
    }
    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Input value={text} onChange={(e) => setText(e.currentTarget.value)} type="text" placeholder='What do you need to do?'/>
            <Btn type="submit">add task</Btn>
        </Form>
    )
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
`

const Input = styled.input`
    width: 100%;
    margin-right: 10px;
    font-size: 25px;
    padding-left: 10px;
`

const Btn = styled.button`
    background-color: #7c187c;
    color: #d5c4c4;
    padding: 5px 10px;
    &:hover {
        background-color: gold;
        color: black;
    }
`


export default TodoInputBar