import React from 'react'
import {ToDoItemType, ToDoPropTypes, NewToDoType, InnerToDoTypes} from './types'

const ToDo = (props: ToDoPropTypes) => {
    const { toDoItems, setToDoItems, darkMode } = props
    const [toDoDesc, setToDoDesc] = React.useState('')

    const handleCompletionChange = (item: ToDoItemType) => {
        const toDoCopy: ToDoItemType[] = [...toDoItems]
        toDoCopy.find(element => element.id === item.id )!.isCompleted = !toDoCopy.find(element => element.id === item.id )!.isCompleted
        setToDoItems(toDoCopy)
    }

    const handleDeleteToDo = (item: ToDoItemType) => {
        const toDoCopy: ToDoItemType[] = [...toDoItems]
        const idx = toDoCopy.findIndex(toDo => toDo.id === item.id)
        toDoCopy.splice(idx,1)
        setToDoItems(toDoCopy)
    }

    return (
        <div className='w-3/4 bg-burnt_orange-200 rounded-lg p-2'>
            To Do List
            <NewToDo setToDoDesc={setToDoDesc} setToDoItems={setToDoItems} toDoItems={toDoItems} toDoDesc={toDoDesc} darkMode={darkMode}/>
            <div className="h-64 overflow-scroll mt-2">
                {toDoItems.filter(item => !item.isCompleted).map((item, i) => (
                    <div key={i} className={`to-do-item incomplete bg-burnt_orange-500`}>
                        <InnerToDo 
                            item={item} 
                            handleCompletionChange={handleCompletionChange}
                            handleDeleteToDo={handleDeleteToDo}
                            darkMode={darkMode}
                        />
                    </div>
                ))}
                {toDoItems.filter(item => item.isCompleted).map((item, i) => (
                    <div key={i} className={`to-do-item completed bg-gray-400 text-gray-100'}`}>
                        <InnerToDo 
                            item={item} 
                            handleCompletionChange={handleCompletionChange}
                            handleDeleteToDo={handleDeleteToDo}
                            darkMode={darkMode}
                        />
                    </div>
                ))}
            </div>
        </div> 
    )
}

const NewToDo = (props: NewToDoType) => {
    const {setToDoDesc, setToDoItems, toDoItems, toDoDesc, darkMode} = props
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
            className={`${darkMode ? 'btn-dark' : 'btn-light'} btn btn-md mr-2`}>
                +
            </button>
            <input 
            placeholder="I need to..."
            value={toDoDesc}
            onChange={(e) => setToDoDesc(e.target.value)}
            className={`flex-1 px-1 rounded-sm ${darkMode ? 'bg-gray-600 text-white' : 'bg-gray-200'}`}>
            </input>
        </div>
    )
}

const InnerToDo = (props: InnerToDoTypes) => {
    const {item, handleCompletionChange, handleDeleteToDo, darkMode} = props
    return (
        <div
            className="flex justify-between items-center p-2 mb-1"
        >
            <div>
                <input 
                checked={item.isCompleted}
                type="checkbox"
                className="mr-2"
                onChange={() => handleCompletionChange(item)}
                />
                {item.desc}
            </div>
            <button 
            onClick={()=>handleDeleteToDo(item)}
            className={`${darkMode ? 'btn-dark' : 'btn-light'} btn btn-sm mr-2`}>
                x
            </button>
        </div>
    )
}

export default ToDo
