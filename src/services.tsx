import { IItem, IPostItem } from './types';

export function postItem({userId, title, description, completed, important, color}:IPostItem): void {
  fetch('http://localhost:3001/todos/', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      title,
      description,
      completed,
      important,
      color,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export function updateItem({userId, id, title, description, completed, important, color}:IItem): void {
  fetch('http://localhost:3001/todos/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      userId,
      id,
      title,
      description,
      completed,
      important,
      color,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}

export function deleteItem(id:number): void {
  fetch('http://localhost:3001/todos/' + id, {
    method: 'DELETE',
  });
}

