"use client"

import { Trash2 } from "lucide-react"
import type { Task } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface TaskItemProps {
  task: Task
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}

export default function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return (
    <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow transition-shadow">
      <div className="flex items-center gap-3">
        <Checkbox checked={task.completed} onCheckedChange={() => onToggle(task.id)} id={`task-${task.id}`} />
        <label
          htmlFor={`task-${task.id}`}
          className={`text-sm font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-700"}`}
        >
          {task.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-500"
      >
        <Trash2 className="h-4 w-4" />
        <span className="sr-only">Delete task</span>
      </Button>
    </li>
  )
}
