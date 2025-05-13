"use client"

import { useState } from "react"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TaskList from "@/components/task-list"
import type { Task } from "@/lib/types"

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState("")

  const addTask = () => {
    if (newTaskText.trim() === "") return

    const newTask: Task = {
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
    }

    setTasks([...tasks, newTask])
    setNewTaskText("")
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTaskCompletion = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <Card className="shadow-lg">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle className="text-center text-2xl font-bold">My Todo List</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex space-x-2 mb-6">
              <Input
                type="text"
                placeholder="Add a new task..."
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addTask()
                }}
                className="flex-1"
              />
              <Button onClick={addTask} size="icon">
                <PlusCircle className="h-5 w-5" />
              </Button>
            </div>

            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />

            {tasks.length === 0 && (
              <p className="text-center text-gray-500 my-8">No tasks yet. Add one to get started!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
