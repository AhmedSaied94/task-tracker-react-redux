import * as actions from './ActionsTypes';

const initialState = {
    tasks:[],
    task:{}
}

export default function Reduser(state=[], action){
    switch(action.type){
        case actions.ADD_TASK:
            return(
                [
                ...state,
                action.payload.task
                // task:action.payload.task,
                
                ]
            )

        case actions.DELETE_TASK:
            return state.filter(task => task.id !== action.payload.taskId)

        case actions.DONE_TASK:
            return(
                state.map(task => 
                    task.id === action.payload.taskId ? 
                    {...task, done:!task.done}: task
                )
            )

        default:
            return state
    }
} 