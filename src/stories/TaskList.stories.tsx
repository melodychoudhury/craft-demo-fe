import type { Meta, StoryObj } from '@storybook/react-vite';

import TaskList from "../../app/components/TaskList";

import * as Task from './Task.stories';

const meta = {
  component: TaskList,
  title: 'TaskList',
  decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...Task.ActionsData,
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.tsx.
    tasks: [
      { ...Task.Default.args.task, id: '1', title: 'Task 1' },
      { ...Task.Default.args.task, id: '2', title: 'Task 2' },
      { ...Task.Default.args.task, id: '30', title: 'Task 3' },
      { ...Task.Default.args.task, id: '4', title: 'Task 4' },
      { ...Task.Default.args.task, id: '5', title: 'Task 5' },
      { ...Task.Default.args.task, id: '60', title: 'Task 6' },
    ],
  },
};

// with pinned tasks 

export const WithPinnedTasks: Story = {
    args: {
        tasks: [
            ...Default.args.tasks.slice(0,5),
            {id: '6', title: 'Walk dog', state: 'TASK_PINNED'},
            {id: '3', title: 'Feed cat', state: 'TASK_PINNED'},
        ],
    },
};

//loading

export const Loading: Story = {
    args: {
        tasks: [],
        loading: true
    }
}

// no tasks 
export const NoTasks: Story = {
    args: {
        tasks: [],
        loading: false
    }
}