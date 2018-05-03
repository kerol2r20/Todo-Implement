import crypto from "crypto";

function addTodo(content) {
  const todoInfo = {
    createdTime: new Date(),
    content
  }
  const id = crypto.createHash('sha1').update(JSON.stringify(todoInfo), 'utf8').digest('hex')
  return {
    type: 'ADD_TODO',
    payload: {
      ...todoInfo,
      id
    }
  };
}

function delTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  }
}
