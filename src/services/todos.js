import { supabase } from './supabase';
import { getSession } from './user';

export async function LoadTodos() {
  const { data } = await supabase.from('todos').select();
  return data;
}

export function LoadDoneTodos() {
  /* return LoadTodos().filter((todo) => todo.done); */
}

export async function DeleteTodo(id) {
  await supabase.from('todos').delete().eq('id', id);
}

export async function ToggleTodo(id, done) {
  await supabase.from('todos').update({ done: done }).eq('id', id);
}

export async function AddTodo(title) {
  const { data } = await getSession();
  if (!data) {
    return null;
  }

  const result = await supabase
    .from('todos')
    .insert({ user_id: data.session.user.id, done: false, title: title })
    .select();

  if (!result.data) return null;
  return result.data[0];
}
