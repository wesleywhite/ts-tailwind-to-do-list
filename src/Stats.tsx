import React from 'react'
import {ToDoItemType} from './types'

type StatsPropTypes = {
    toDoItems: ToDoItemType[]
}

const Stats = (props: StatsPropTypes) => (
    <div className="w-3/4 bg-burnt_orange-400 rounded-lg p-2 mt-4">
        You have completed {props.toDoItems.reduce((a, { isCompleted }) => isCompleted? a+=1 : a, 0)} to do's.
    </div>
)

export default Stats
