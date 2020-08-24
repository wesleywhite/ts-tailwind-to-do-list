
export type ToDoItemType = {
    desc: string
    id: string
    isCompleted: boolean
}

export type ToDoPropTypes = {
    toDoItems: ToDoItemType[],
    setToDoItems: (toDos: ToDoItemType[])=>void,
    darkMode: boolean
}

export type NewToDoType = {
    setToDoDesc: (arg0: string) => void
    setToDoItems: (arg0: ToDoItemType[]) => void
    toDoItems: ToDoItemType[]
    toDoDesc: string,
    darkMode: boolean
}

export type InnerToDoTypes = {
    item: ToDoItemType,
    handleCompletionChange: (item: ToDoItemType) => void,
    handleDeleteToDo: (item: ToDoItemType) => void,
    darkMode: boolean
}

export type StatsTypes = {
    toDoItems: ToDoItemType[]
}

