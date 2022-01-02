import { Form, Input, Button, DatePicker } from "antd"
import { useRef, useState } from "react"
import { Store } from "../Store"
import { addTask } from '../Actions'
import { connect } from "react-redux"
const InputForm = (props) => {

    const formRef = useRef()
    const style = {
        labelCol:{span:8,},
        wrapperCol:{span:16,}
    }
    const [taskName, setTaskName] = useState("");
    const [endDate, setEndDate] = useState("");
    const [done, setDone] = useState(false);
    

    const onFinish = (e) => {
        let id = Math.random() * 10000 +1
        // addTask({id, taskName, endDate, done})
        props.addTask({id,taskName, endDate, done})
        // Store.dispatch(actions.addTask({id, taskName, endDate, done}))
        setTaskName([""])
        console.log(taskName, endDate)
        
    }

    const collectTaskName = (e) => {
        setTaskName(e.target.value)
        console.log(taskName)
    }
    const collectEndDate = (value, dataString) => {
        setEndDate(dataString)
        console.log(value, dataString)
    }

    const onReset = () => {
        formRef.current.resetFields()
    } 
    return <Form {...style} ref={formRef} name="new_task" onFinish={onFinish}>
        <Form.Item
            name='task'
            label='Task'
            rules={[{required:true, message:"Please enter a task..."}]}
        >
            <Input
                name='task'
                value={taskName}
                onChange={collectTaskName} />
        </Form.Item>
        <Form.Item
            name='end_date'
            label='Dead Line'
            rules={[{required:true, message:'please pick a date for the dead line'}]}
        >
            <DatePicker style={{width:"100%"}} onChange={collectEndDate} value={endDate} />
            
        </Form.Item>
        <Form.Item
            wrapperCol={{span:16, offset:8}}
        >
            <Button 
                type="primary"
                htmlType="submit"

            >
            Submit</Button>
            <Button
                style={{marginLeft:"0.5rem"}}
                onClick={onReset}
            >Reset</Button>    
        </Form.Item>
    </Form>
}

export default connect(null, { addTask })(InputForm);