import Elysia, { t } from 'elysia'

// Store todos in memory
const todos: Array<{ id: string; title: string; completed: boolean }> = []

export const todoController = new Elysia({ prefix: '/todo' })
  // Get all todos
  .get('/all', () => todos)

  // Get single todo
  .get(
    '/:id',
    ({ params: { id } }) => {
      const todo = todos.find((todo) => todo.id === id)
      if (!todo) throw new Error('Todo not found')
      return todo
    },
    {
      params: t.Object({ id: t.String() }),
    },
  )

  // Add new todo
  .post(
    '/add',
    ({ body }) => {
      const todo = {
        id: crypto.randomUUID(),
        title: body.title,
        completed: false,
      }
      todos.push(todo)
      return todo
    },
    {
      body: t.Object({
        title: t.String({ minLength: 1 }),
      }),
    },
  )

  // Delete todo
  .post(
    '/delete',
    ({ body }) => {
      const { id } = body
      const index = todos.findIndex((todo) => todo.id === id)
      if (index === -1) {
        throw new Error('Todo not found')
      }
      todos.splice(index, 1)
      return { success: true }
    },
    {
      body: t.Object({
        id: t.String(),
      }),
    },
  )

  // Update todo
  .post(
    '/update',
    ({ body }) => {
      const { id, title, completed } = body
      const index = todos.findIndex((todo) => todo.id === id)
      if (index === -1) {
        throw new Error('Todo not found')
      }
      todos[index] = { id, title, completed }
      return { success: true, todo: todos[index] }
    },
    {
      body: t.Object({
        id: t.String(),
        title: t.String({ minLength: 1 }),
        completed: t.Boolean(),
      }),
    },
  )
