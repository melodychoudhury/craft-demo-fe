import { Key } from "lucide-react";
import React from "react";

import {
  Star
} from "lucide-react";

type TaskData = {
  id: string;
  title: string;
  state: 'TASK_ARCHIVED' | 'TASK_INBOX' | 'TASK_PINNED';
};

type TaskProps = {
  task: TaskData;
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

export const TASK_INBOX = 'TASK_INBOX';
export const TASK_PINNED = 'TASK_PINNED';
export const TASK_ARCHIVED = 'TASK_ARCHIVED';

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor={`archiveTask-${id}`}
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      </label>

      <label htmlFor={`title-${id}`} aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
          placeholder="Input title"
        />
      </label>
      {state !== "TASK_ARCHIVED" && (
        <button
          className={`pin-button ${state === TASK_PINNED ? "text-[#2cc5d2]" : "text-[#eee]"}`}
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <Star />
        </button>
      )}
    </div>
  );
}