export default function todoReducer(todos, action) {
  // using switch

  switch (action.type) {
    case "added": {
      return [...todos, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return todos.map((t) => {
        if (t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error(`No action mathched with this case ${action.type}`);
    }
  }

  // using if and else
  //   if (action.type === "added") {
  //     return [...todos, { id: action.id, text: action.text, done: false }];
  //   } else if (action.type === "changed") {
  //     return todos.map((t) => {
  //       if (t.id === action.todo.id) {
  //         return action.todo;
  //       } else {
  //         return t;
  //       }
  //     });
  //   } else if (action.type === "deleted") {
  //     return todos.filter((t) => t.id !== action.id);
  //   } else {
  //     Error(`No action mathched with this case ${action.type}`);
  //   }
}
