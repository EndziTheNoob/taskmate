let nameStorage = '';

export function SaveUserName(name) {
  nameStorage = name;
}

export function LoadUserName() {
  return nameStorage;
}
