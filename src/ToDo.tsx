import React from 'react'
import {ToDoItemType} from './types'

type ToDoPropTypes = {toDoItems: ToDoItemType[], setToDoItems: (toDos: ToDoItemType[])=>void}

const ToDo = (props: ToDoPropTypes) => {
    const { toDoItems, setToDoItems } = props
    //const [toDoItems, setToDoItems] = React.useState<ToDoItemType[]>([])
    const [toDoDesc, setToDoDesc] = React.useState('')

    const handleCompletionChange = (item: ToDoItemType) => {
        const toDoCopy: ToDoItemType[] = [...toDoItems]
        toDoCopy.find(element => element.id === item.id )!.isCompleted = !toDoCopy.find(element => element.id === item.id )!.isCompleted
        setToDoItems(toDoCopy)
    }


    return (
        <div className='w-3/4 bg-burnt_orange-200 rounded-lg p-2'>
            To Do List
            <NewToDo setToDoDesc={setToDoDesc} setToDoItems={setToDoItems} toDoItems={toDoItems} toDoDesc={toDoDesc}/>
            <div className="h-64 overflow-scroll mt-2">
                {toDoItems.filter(item => !item.isCompleted).map((item, i) => (
                    <div key={i} className={`to-do-item-incomplete bg-burnt_orange-500`}>
                        <input 
                        checked={item.isCompleted}
                        type="checkbox"
                        className="mr-2"
                        onChange={() => handleCompletionChange(item)}
                        />
                        {item.desc}
                    </div>
                ))}
                {toDoItems.filter(item => item.isCompleted).map((item, i) => (
                    <div key={i} className={`to-do-item-completed bg-gray-400 text-gray-100'}`}>
                        <input 
                        checked={item.isCompleted}
                        type="checkbox"
                        className="mr-2"
                        onChange={() => handleCompletionChange(item)}
                        />
                        {item.desc}
                    </div>
                ))}
            </div>
        </div> 
    )
}

type NewToDoType = {
    setToDoDesc: (arg0: string) => void
    setToDoItems: (arg0: ToDoItemType[]) => void
    toDoItems: ToDoItemType[]
    toDoDesc: string
}

const NewToDo = (props: NewToDoType) => {
    const {setToDoDesc, setToDoItems, toDoItems, toDoDesc} = props
    const handleCreateItem = () => {
        if (toDoDesc.trim() !== '') {
            const newItem: ToDoItemType = {
                desc: toDoDesc.trim(),
                id: toDoDesc,
                isCompleted: false
            }
            setToDoItems([newItem, ...toDoItems ])
            setToDoDesc('')
        }
    }

    return (
        <div className="flex w-full">
            <button 
            onClick={() => handleCreateItem()}
            className="btn">
                +
            </button>
            <input 
            placeholder="I need to..."
            value={toDoDesc}
            onChange={(e) => setToDoDesc(e.target.value)}
            className="flex-1 px-1 rounded-sm">
            </input>
        </div>
    )
}

export default ToDo
