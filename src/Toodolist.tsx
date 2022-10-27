import React from "react";


type PropsTasksType = {
    tasks: Array<TasksType>
    title: string
    RemoveTask: () => void

}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}



export const Todolist = (props: PropsTasksType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el)=>{
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
              
            </ul>
            <div>
                <button onClick={()=>{props.RemoveTask()}}>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
