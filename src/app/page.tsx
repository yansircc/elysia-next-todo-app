import { TodoList } from '@/components/todo'
import { elysia } from '@/elysia/client'

export default async function TodoPage() {
  const { data: initialTodos, error } = await elysia.api.todo.all.get()

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="mb-8 text-2xl font-semibold">Todo List</h1>
      <TodoList initialTodos={initialTodos ?? []} initialError={error?.value?.toString()} />
    </main>
  )
}
