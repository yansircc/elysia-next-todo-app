import { elysia } from '@/elysia/client'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const { data: todo, error } = await elysia.api.todo({ id: slug }).get()

  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="text-lg text-red-500">Todo not found</p>
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-semibold">{todo.title}</h1>
        <p className="text-slate-500">Completed: {todo.completed ? 'Yes' : 'No'}</p>
      </div>
    </main>
  )
}
