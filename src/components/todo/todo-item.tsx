'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { todoSchema, type Todo } from '@/components/todo/types'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { cn } from '@/lib/utils'

interface TodoItemProps {
  todo: Todo
  onUpdate: (todo: Todo) => Promise<void>
  onDelete: (id: string) => Promise<void>
  disabled: boolean
}

export function TodoItem({ todo, onUpdate, onDelete, disabled }: TodoItemProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Todo>({
    resolver: zodResolver(todoSchema),
    defaultValues: todo,
  })

  return (
    <div
      className={cn(
        'group flex items-center gap-3 rounded-lg border p-3 transition-colors hover:bg-slate-50',
        todo.completed && 'bg-slate-50/50',
        (disabled || isSubmitting) && 'opacity-50',
      )}
    >
      <div className="flex flex-1 items-center gap-3">
        <Checkbox
          checked={todo.completed}
          className="h-5 w-5"
          disabled={disabled || isSubmitting}
          onCheckedChange={(checked) => {
            void onUpdate({
              ...todo,
              completed: checked as boolean,
            })
          }}
        />
        <input
          {...register('title')}
          type="text"
          disabled={disabled || isSubmitting}
          className={cn(
            'block w-full border-none bg-transparent p-0 text-sm focus:ring-0',
            todo.completed && 'text-slate-500 line-through',
          )}
          onBlur={handleSubmit((data) => {
            if (data.title !== todo.title) {
              void onUpdate(data)
            }
          })}
        />
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        disabled={disabled || isSubmitting}
        className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100"
        onClick={() => onDelete(todo.id)}
      >
        <span className="sr-only">Delete</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </div>
  )
}
