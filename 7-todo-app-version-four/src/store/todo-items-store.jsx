import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  handleAdd: () => {},
  handleDelete: () => {},
});

// definition of reducer function
const todoReducer = (state, action) => {
  let newTodoItems = state;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...state,
      { name: action.payload.inputTask, date: action.payload.inputDate },
    ];
  }
  if (action.type === "DELETE_ITEM") {
    newTodoItems = state.filter((item) => item.name != action.payload.itemName);
  }

  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, todoDispatcher] = useReducer(todoReducer, []);

  const handleAdd = (inputTask, inputDate) => {
    if (inputTask && inputDate) {
      //Defining action for new task which will be added
      const addAction = {
        // action definition
        type: "NEW_ITEM",
        payload: {
          inputTask,
          inputDate,
        },
      };
      todoDispatcher(addAction);

      //previous version
      /* //Functional Update 
      setTodoItems((curValue) => {
        const newTodoItems = [
          ...curValue,
          { name: inputTask, dueDate: inputDate },
        ];
        return newTodoItems;
      });
      */

      //previous of previos version
      /* //Normal Update
      let newTodoItems = [
        ...todoItems,
        { name: inputTask, dueDate: inputDate },
      ];
      setTodoItems(newTodoItems);
      */
    } else alert("Invalid Input!");
  };

  const handleDelete = (itemName) => {
    //defining action of the task which will be deleted
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    todoDispatcher(deleteAction);

    /* //previous version
    let remainingItems = todoItems.filter((item) => item.name != itemName);
    setTodoItems(remainingItems);
    */
  };

  return (
    <>
      <TodoItemsContext.Provider value={{ todoItems, handleAdd, handleDelete }}>
        {children}
      </TodoItemsContext.Provider>
    </>
  );
};

export default TodoItemContextProvider;
