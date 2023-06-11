import { supabase } from './supabase';
import { getSession } from './user';

export function SaveTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export async function LoadTodos() {
  const { data } = await supabase.from('todos').select();
  return data;
}

export function LoadDoneTodos() {
  /* return LoadTodos().filter((todo) => todo.done); */
}

export async function AddTodo(title) {
  const { data } = await getSession();
  if (!data) {
    return;
  }

  await supabase
    .from('todos')
    .insert({ user_id: data.session.user.id, done: false, title: title });
}
