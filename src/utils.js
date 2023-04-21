const API_KEY = "keyRd9PBXk6fr9syc";
const baseId = "appqo7Le8Rs2HBzOK";

export const readTodoList = async (table) => {
  const url = `https://api.airtable.com/v0/${baseId}/${table}`;
  const res = await fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${API_KEY}`,
    }),
  });

  const tasks = await res.json();
  return tasks;
};

export const checkTask = async (table, taskId, Completed) => {
  const url = `https://api.airtable.com/v0/${baseId}/${table}/${taskId}`;
  const body = JSON.stringify({
    fields: {
      Completed,
    },
  });
  const res = await fetch(url, {
    method: "PATCH",
    headers: new Headers({
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    }),
    body,
  });

  const tasks = await res.json();
  console.log("res====", tasks);
  return tasks;
};

export const updateTask = async (table, taskId, Title) => {
  const url = `https://api.airtable.com/v0/${baseId}/${table}/${taskId}`;
  const body = JSON.stringify({
    fields: {
      Title,
    },
  });
  const res = await fetch(url, {
    method: "PATCH",
    headers: new Headers({
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    }),
    body,
  });

  const tasks = await res.json();
  console.log("res====", tasks);
  return tasks;
};
export const AddTask = async (table, newTsk) => {
  const url = `https://api.airtable.com/v0/${baseId}/${table}`;
  const body = JSON.stringify({
    fields: {
      ...newTsk,
    },
  });
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    }),
    body,
  });

  const tasks = await res.json();
  console.log("res====", tasks);
  return tasks;
};

export const deleteTask = async (table, taskId) => {
  const url = `https://api.airtable.com/v0/${baseId}/${table}/${taskId}`;

  const res = await fetch(url, {
    method: "delete",
    headers: new Headers({
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    }),
  });

  const tasks = await res.json();
  console.log("res====", tasks);
  return tasks;
};
