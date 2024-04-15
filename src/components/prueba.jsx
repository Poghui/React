import { Row, Col } from 'antd'
import React from 'react'

const prueba = () => {
    return (
        <div>
            <Row gutter={[10]} align="top">
                <Col lg={4}>
                    <h2>Título 1</h2>
                </Col>
                <Col lg={4}>
                    <h2>Título 2</h2>
                </Col>
                <Col lg={4}>
                    <h2>Título 2</h2>
                </Col><Col lg={4}>
                    <h2>Título 2</h2>
                </Col><Col lg={4}>
                    <h2>Título 2</h2>
                </Col><Col lg={4}>
                    <h2>Título 2</h2>
                </Col><Col lg={4}>
                    <h2>Título 2</h2>
                </Col>
            </Row>
        </div>
    )
}

export default prueba