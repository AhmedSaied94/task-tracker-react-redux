import * as actions from './ActionsTypes';

export const addTask = (task) => dispatch => {
    console.log('done')
    dispatch(
        {
            type:actions.ADD_TASK,
            payload:{
                task
            }
        }
    )
}

export const deleteTask = (taskId) => dispatch => {
    dispatch(
        {
            type:actions.DELETE_TASK,
            payload:{
                taskId
            }
        }
    )
}

export const doneTask = (taskId) => dispatch => {
    dispatch(
        {
            type:actions.DONE_TASK,
            payload:{
                taskId
            }
        }
    )
}