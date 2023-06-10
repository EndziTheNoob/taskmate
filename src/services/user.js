export function SaveUserName(name) {
  localStorage.setItem('name', name);
}

export function LoadUserName() {
  return localStorage.getItem('name') ?? '';
}
