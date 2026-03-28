import type { RootState, AppDispatch } from '../lib/store'
import Task from '../../app/components/Task';
import { useDispatch, useSelector } from 'react-redux';
// selects the state from the store
import {updateTaskState} from '../lib/store';

import {
  Check
} from "lucide-react";

type TaskData = {
  id: string;
  title: string;
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
};

type TaskListProps = {
    loading?: boolean;
    tasks: TaskData[];
    onPinTask: (id:string) => void;
    onArchiveTask: (id:string) => void;
};

export default function TaskList() {
    //get state from store
    const tasks = useSelector((state: RootState) => {
        const tasksInOrder = [
            ...state.taskbox.tasks.filter((t) => t.state === 'TASK_PINNED'),
            ...state.taskbox.tasks.filter((t) => t.state !== 'TASK_PINNED'),
        ];
        //remove archives
        const filteredTasks = tasksInOrder.filter(
        (t) => t.state === "TASK_INBOX" || t.state === 'TASK_PINNED'
        );
        return filteredTasks;
    });

    //manages loading
    const { status } = useSelector((state: RootState) => state.taskbox);


    const dispatch = useDispatch<AppDispatch>();

    const pinTask = (value: string) => {
        // We're dispatching the Pinned event back to our store
        dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
    };

    const archiveTask = (value: string) => {
    // We're dispatching the Archive event back to our store
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
  };


    const LoadingRow = (
        <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
            <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
        </div>
    );

    if (status === "loading") {
        return (
            <div className="list-items" data-testid="loading">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                <div>Loading pls wait...</div>
            </div>
        );
    }

    if (tasks.length === 0) {
        return ( 
            <div className="list-items" key={"empty"} data-testid="empty">
                <div className="wrapper-message">
                    <Check className="icon-check" />
                    <p className="title-message">You have no tasks</p>
                    <p className="subtitle-message">Sit back and relax</p>
                </div>
            </div>
        );
    }

    return (
    <div className="list-items" data-testid="success" key="success">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={pinTask}
          onArchiveTask={archiveTask}
        />
      ))}
    </div>
  );

    
}