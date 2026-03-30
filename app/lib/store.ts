import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TaskData = {
  id: string;
  title: string;
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
};

export interface TaskBoxState {
  tasks: TaskData[];
  status: 'idle' | 'loading' | 'failed' | 'succeeded';
  error: string | null;
}

const defaultTasks: TaskData[] = [
  { id: '1', title: 'make sashimi', state: 'TASK_PINNED' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else pin', state: 'TASK_PINNED' },
  { id: '4', title: 'Something again pinny', state: 'TASK_PINNED' },
];

const initialState: TaskBoxState = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
};

const tasksSlice = createSlice({
  name: 'taskbox',
  initialState,
  reducers: {
    updateTaskState: (
      state,
      action: PayloadAction<{ id: string; newTaskState: TaskData['state'] }>
    ) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.state = action.payload.newTaskState;
      }
    },
  },
});

export const { updateTaskState } = tasksSlice.actions;

export const makeStore = (preloadedState?: { taskbox: TaskBoxState }) =>
  configureStore({
    reducer: {
      taskbox: tasksSlice.reducer,
    },
    preloadedState,
  });

// main app store
const store = makeStore();

// storybook store states
export const loadingState: { taskbox: TaskBoxState } = {
  taskbox: {
    tasks: [],
    status: 'loading',
    error: null,
  },
};


export const failedState: { taskbox: TaskBoxState } = {
  taskbox: {
    tasks: [],
    status: 'failed',
    error: null,
  },
};


export const emptyState: { taskbox: TaskBoxState } = {
  taskbox: {
    tasks: [],
    status: 'idle',
    error: null,
  },
};

export const pinnedState: { taskbox: TaskBoxState } = {
  taskbox: {
    tasks: defaultTasks.map((task) =>
      task.id === '4'
        ? { ...task, state: 'TASK_PINNED' }
        : task
    ),
    status: 'idle',
    error: null,
  },
};

// storybook store instances
export const defaultStoryStore = makeStore();
export const loadingStoryStore = makeStore(loadingState);
export const failedStoryStore = makeStore(failedState);
export const emptyStoryStore = makeStore(emptyState);
export const pinnedStoryStore = makeStore(pinnedState);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;