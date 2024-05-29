import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITask {
  id: number;
  title: string;
  description: string;
}

interface ITodos {
  tasks: ITask[];
}

const initialState: ITodos = {
  tasks: JSON.parse(localStorage.getItem("todo") || "[]"),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<ITask, "id">>) => {
      const newTask: ITask = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.tasks.push(newTask);
      handleLocalStorage(state.tasks);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      handleLocalStorage(state.tasks);
    },
    editTask: (state, action: PayloadAction<ITask>) => {
      const index = state.tasks.findIndex(
        (task) => task.id == action.payload.id
      );
      if (index !== -1) state.tasks[index] = action.payload;
      handleLocalStorage(state.tasks);
    },
  },
});

const handleLocalStorage = (tasks: ITask[]) => {
  localStorage.setItem("todo", JSON.stringify(tasks));
};

export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
