import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';

import TaskList from '../../app/components/TaskList';
import {
  defaultStoryStore,
  loadingStoryStore,
  emptyStoryStore,
  failedStoryStore,
  pinnedStoryStore,
} from '../../app/lib/store';

const meta = {
  title: 'TaskList',
  component: TaskList,
  tags: ['autodocs'],
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Provider store={defaultStoryStore}>
        <Story />
      </Provider>
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <Provider store={loadingStoryStore}>
        <Story />
      </Provider>
    ),
  ],
};

export const Failed: Story = {
  decorators: [
    (Story) => (
      <Provider store={failedStoryStore}>
        <Story />
      </Provider>
    ),
  ],
};

export const Empty: Story = {
  decorators: [
    (Story) => (
      <Provider store={emptyStoryStore}>
        <Story />
      </Provider>
    ),
  ],
};

export const WithPinnedTasks: Story = {
  decorators: [
    (Story) => (
      <Provider store={pinnedStoryStore}>
        <Story />
      </Provider>
    ),
  ],
};