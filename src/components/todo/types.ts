import { z } from 'zod'

export const todoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, 'Title is required'),
  completed: z.boolean(),
})

export const addTodoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
})

export type Todo = z.infer<typeof todoSchema>
export type AddTodoFormValues = z.infer<typeof addTodoSchema>
