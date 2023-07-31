import React from "react";
import css from './Header.module.css';
import { Col, Row } from "react-bootstrap";

function Header() {
    return (
        <Row>
            <Col>
                <div className={css.root}>Todo List</div>
            </Col>
        </Row>
    )
}

export default Header;