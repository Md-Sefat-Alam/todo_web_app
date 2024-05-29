import { ITask, addTask, editTask } from "@/store/slices/todoSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  task?: ITask;
  onClose: () => void;
};

export default function AddTask({ onClose, task }: Props) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (task) {
      dispatch(editTask({ id: task.id, title, description }));
    } else {
      dispatch(addTask({ title, description }));
    }
    onClose();
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full mb-2 p-2 border rounded-md"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full mb-2 p-2 border rounded-md"
      />
      <div className="flex justify-between">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {task ? "Update Task" : "Add Task"}
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
