import { supabase } from './supabase';

export function SaveUserName(name) {
  localStorage.setItem('name', name);
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
  return supabase.auth.signOut();
};

export const getSession = () => {
  return supabase.auth.getSession();
};

export const getUserEmail = async () => {
  const { data } = await getSession();
  return data.session?.user.email;
};
