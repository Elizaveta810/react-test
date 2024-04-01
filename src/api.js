export let token;
export const setToken = (newToken) => {
  token = newToken;
};
const baseHost = "https://wedev-api.sky.pro/api/kanban";
const userHost = "https://wedev-api.sky.pro/api/user";

//Получить список задач
export async function getTodos({ token }) {
  const response = await fetch(baseHost, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.status === 200) {
    throw new Error("Ошибка");
  }

  const data = await response.json();
  return data;
}

//Добавить задачу в список

export async function postTodo({ taskData, token }) {
  const response = await fetch(baseHost, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });
  if (response.status === 400) {
    throw new Error("Заполнены не все поля");
  }
  if (response.status === 500) {
    throw new Error("Сервер упал");
  }
  const data = await response.json();
  return data;
}

// Изменение задачи
export async function changeTodo({
 taskData, token
}) {
  const response = await fetch(baseHost + "/" + taskData._id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(taskData),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось редактировать задачу, попробуйте снова");
  }
}

//Удаление задачи
export async function deleteTodo({ _id, token }) {
  const response = await fetch(baseHost  + `/${_id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.status === 201) {
    throw new Error("Не удалось удалить задачу, попробуйте позже");
}
const data = await response.json();
return data;
}
 







//РЕГИСТРАЦИЯ
export function signUp({ login, name, password }) {
  return fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    }
    return response.json();
  });
}

//АВТОРИЗАЦИЯ
export default function signIn({ login, password }) {
  return fetch(userHost + "/login", {
    method: "POST",
    body: JSON.stringify({ login, password }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Неверный логин или пароль");
    }
    return response.json();
  });
}


