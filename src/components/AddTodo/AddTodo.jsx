import { nanoid } from "nanoid";
import { useState } from "react";
import React from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import css from './AddTodo.module.css';

function AddTodo({todo, setTodo}) {

    const [value, setValue] = useState('');

    function saveTodo() {
        if (value) {
            setTodo(
                [...todo, {
                    id: nanoid(),
                    title: value,
                    status: false
                }]
            )
            setValue('')
        }
        alert("Fill in the wild")
    }

    return (
        <Row>
            <Col className={css.addTodoForm}> 
                <FormControl placeholder="Enter a task" value={value} onChange={(event) => setValue(event.target.value)}/>
                <Button onClick={saveTodo} className={css.btn}>Save</Button>
            </Col>
        </Row>
    )
}

export default AddTodo;