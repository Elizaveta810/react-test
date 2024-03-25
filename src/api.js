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
    body: JSON.stringify({
      title: taskData.title,
      topic: taskData.topic,
      status: "Без статуса",
      description: taskData.description,
      date: taskData.date,
    }),
  });
  if (!response.status === 400) {
    throw new Error("Заполнены не все поля");
  }
  const data = await response.json();
  return data;
}

// Изменение задачи
export async function changeTodo({
  title,
  topic,
  status,
  description,
  date,
  _id,
}) {
  const response = await fetch(baseHost + "/" + _id, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      status,
      description,
      date,
    }),
  });

  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Не удалось редактировать задачу, попробуйте снова");
  }
}

//Удаление задачи
export async function DeleteTodo({ _id }) {
  const response = await fetch(baseHost + "/" + _id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка удаления задачи");
  }
  return await response.json();
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


