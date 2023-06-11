import { supabase } from './supabase';

export async function SaveUserProfile(name, color) {
  const { data } = await getSession();
  if (!data) {
    return;
  }

  await supabase
    .from('profiles')
    .upsert({ id: data.session.user.id, nickname: name, color: color })
    .select();
}

export function LoadUserName() {
  return localStorage.getItem('name') ?? '';
}

export const signUp = (email, password) => {
  return supabase.auth.signUp({ email, password });
};

export const signIn = (email, password) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signOut = () => {
  sessionStorage.removeItem('hasArrived');
  return supabase.auth.signOut();
};

export const getSession = () => {
  return supabase.auth.getSession();
};

export const getUserEmail = async () => {
  const { data } = await getSession();
  return data.session?.user.email;
};
