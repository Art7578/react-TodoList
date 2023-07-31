import React, { useEffect } from "react";
import { useState } from "react";
import css from './ListTodo.module.css';
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { faEdit, faLock, faLockOpen, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo)
    }, [todo])

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status
            }
            return item;
        })
        setTodo(newTodo);
    }
    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }
    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if(item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }
    function todoFilter(status) {
        if(status === 'all') {
            setFiltered(todo)
        } else {
            let newTodo = [...todo].filter(item => item.status === status)
            setFiltered(newTodo)
        }
    }
    

    return (
        <div>
            <Row>
                <Col className={css.filter}>
                    <ButtonGroup aria-label="Basic example" className={css.btns}>
                        <Button variant="secondary" onClick={() => todoFilter('all')}>All</Button>
                        <Button variant="secondary" onClick={() => todoFilter(false)}>Open</Button>
                        <Button variant="secondary" onClick={() => todoFilter(true)}>Close</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <ul>
                {
                    filtered.map(item => (
                        <li className={css.listItems} key={item.id}>
                            {
                                edit === item.id ? 
                                <div>
                                    <input onChange={(event) => setValue(event.target.value)} value={value}/>
                                </div>
                                : <h3 className={item.status ? css.close : ''}>{item.title}</h3>
                            }

                            {
                                edit === item.id ? 
                                <div>
                                    <Button onClick={() => saveTodo(item.id)} size="sm">
                                        <FontAwesomeIcon icon={faSave}/>
                                    </Button>
                                </div>
                                : <div>
                                    <Button onClick={() => deleteTodo(item.id)} size="sm">
                                        <FontAwesomeIcon icon={faTrash}/>
                                    </Button>
                                    <Button onClick={() => editTodo(item.id, item.title)} className={css.btn} size="sm">
                                        <FontAwesomeIcon icon={faEdit}/>
                                    </Button>
                                    <Button onClick={() => statusTodo(item.id)} className={css.btn} size="sm">
                                        {
                                            item.status ? <FontAwesomeIcon icon={faLock}/>
                                            : <FontAwesomeIcon icon={faLockOpen}/>
                                        } 
                                    </Button>
                                </div>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;