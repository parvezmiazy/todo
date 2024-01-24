export default function todoReducer(draft, action) {
  // using switch

  switch (action.type) {
    case "added": {
      //using reducer
      //return [...todos, { id: action.id, text: action.text, done: false }];
      // using immer reducer
      draft.push({ id: action.id, text: action.text, done: false });
      break; // if we are not using return then we can set a break
    }
    case "changed": {
      //using reducer
      // return todos.map((t) => {
      //   if (t.id === action.todo.id) {
      //     return action.todo;
      //   } else {
      //     return t;
      //   }
      // });
      // using immer reducer
      const index = draft.findIndex((t) => t.id === action.todo.id);
      draft[index] = action.todo;
      break;
    }
    case "deleted": {
      //using reducer
      //return todos.filter((t) => t.id !== action.id);
      // using immer reducer
      return draft.filter((t) => t.id !== action.id);
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
