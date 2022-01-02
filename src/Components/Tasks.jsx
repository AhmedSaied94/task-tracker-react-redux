import { List } from 'antd';
import { useEffect } from 'react';
import { DeleteTwoTone, CheckCircleTwoTone } from '@ant-design/icons'
import { Store } from '../Store';
import * as actions from '../Actions'
import { deleteTask, doneTask } from '../Actions';
import { connect } from 'react-redux';

const Tasks = (props) => {


  // useEffect(()=>{
  //   console.log(props.tasks2)
  // },[props.tasks2])

    return <List
    itemLayout="horizontal"
    dataSource={props.tasks2}
    renderItem={item => (
      <List.Item className={item.done ? "done" : ""} actions={[
          // <DeleteTwoTone twoToneColor='red' onClick={()=> deleteTask(item.id)} />,
          <DeleteTwoTone twoToneColor='red' onClick={()=> props.deleteTask(item.id)} />,
          // <CheckCircleTwoTone twoToneColor='green' onClick={()=> doneTask(item.id)} />
          <CheckCircleTwoTone twoToneColor='green' onClick={()=> props.doneTask(item.id)} />
      ]}>
        <List.Item.Meta
          title={item.taskName}
          description={item.endDate}
        />
      </List.Item>
    )}
  />
}
const mapStateToProps = state => ({
  tasks2:state
  // task:state.task
})

export default connect(mapStateToProps, { deleteTask, doneTask })(Tasks);