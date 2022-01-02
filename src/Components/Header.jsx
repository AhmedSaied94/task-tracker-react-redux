import { Row, Col, Button, Typography } from 'antd';
export const Header = (props) => {
    const {Title} = Typography;
    return <Row>
        <Col span={18}>
            <Title level={3}>Task Tracker</Title>
        </Col>
        <Col span={6}>
            <Button
                type='primary'
                block
                style={{backgroundColor:'green', borderColor:"green"}}
                onClick={""}
            >
                Add
            </Button>
        </Col>
    </Row>
}