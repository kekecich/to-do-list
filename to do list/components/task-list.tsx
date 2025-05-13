"use client"

import type { Task } from "@/lib/types"
import TaskItem from "./task-item"

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export default function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </ul>
  )
}
