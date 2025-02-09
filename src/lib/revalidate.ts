'use server'

import { revalidatePath } from 'next/cache'

// Single responsibility: handle revalidation
export async function revalidateTodos() {
  revalidatePath('/')
}
