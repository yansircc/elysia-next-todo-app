'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { elysia } from '@/elysia/client'
import { TodoItem } from './todo-item'
import { addTodoSchema, type AddTodoFormValues, type Todo } from './types'

interface TodoListProps {
  initialTodos: Todo[]
  initialError?: string | null
}

export function TodoList({ initialTodos, initialError }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [error, setError] = useState<string | null>(initialError ?? null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddTodoFormValues>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      title: '',
    },
  })

  const addTodo = async (data: AddTodoFormValues) => {
    try {
      const { error } = await elysia.api.todo.add.post(data)
      if (error) throw new Error(error.value ? JSON.stringify(error.value) : 'Failed to add todo')

      const { data: todos } = await elysia.api.todo.all.get()
      setTodos(todos ?? [])
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add todo')
    }
  }

  const updateTodo = async (todo: Todo) => {
    try {
      setTodos((currentTodos) => currentTodos.map((t) => (t.id === todo.id ? todo : t)))

      const { error } = await elysia.api.todo.update.post(todo)
      if (error) {
        throw new Error(error.value ? JSON.stringify(error.value) : 'Failed to update todo')
      }

      const { data: todos } = await elysia.api.todo.all.get()
      setTodos(todos ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo')
      const { data: todos } = await elysia.api.todo.all.get()
      setTodos(todos ?? [])
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id))

      const { error } = await elysia.api.todo.delete.post({ id })
      if (error) {
        throw new Error(error.value ? JSON.stringify(error.value) : 'Failed to delete todo')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo')
      const { data: todos } = await elysia.api.todo.all.get()
      setTodos(todos ?? [])
    }
  }

  return (
    <>
      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <form onSubmit={handleSubmit(addTodo)} className="mb-8 flex gap-2">
        <Input
          {...register('title')}
          placeholder="What needs to be done?"
          className="flex-1"
          disabled={isSubmitting}
        />
        <Button type="submit" disabled={isSubmitting}>
          Add
        </Button>
      </form>

      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
            disabled={isSubmitting}
          />
        ))}
      </div>
    </>
  )
}
