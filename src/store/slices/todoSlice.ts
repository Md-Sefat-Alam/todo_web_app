import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ITask {
  id: number;
  title: string;
  description: string;
}

interface ITodos {
  tasks: ITask[];
}

const initialState: ITodos = {
  tasks: [],
};
