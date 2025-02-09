import { treaty } from '@elysiajs/eden'
import type { TElysiaApp } from '@/elysia'
import { env } from '@/env'

export const elysia = treaty<TElysiaApp>(env.NEXT_PUBLIC_FRONT_URL, {
  fetch: {
    next: { revalidate: 0 },
  },
})
