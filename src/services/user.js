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

export async function LoadUserProfile() {
  const { data } = await getSession();
  if (!data) {
    return null;
  }

  const result = await supabase
    .from('profiles')
    .select()
    .eq('id', data.session.user.id);

  if (!result.data) return null;
  return result.data[0];
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
