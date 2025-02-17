import type { Session } from '@supabase/supabase-js'
import { useState, type Ref } from '#imports'

/**
 * Reactive `Session` state from Supabase. This is initialized in both client and server plugin
 * and, on the client, also updated through `onAuthStateChange` events.
 */
export const useSupabaseSession = (): Ref<Omit<Session, 'user'> | null> => useState<Omit<Session, 'user'> | null>('supabase_session', () => null)
