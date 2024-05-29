// components/TaskList.tsx
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteTask } from "../store/slices/todoSlice";
import { useState } from "react";
import AddTask from "./AddTask";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState<null | {
    id: number;
    title: string;
    description: string;
  }>(null);

  return (
    <div className="space-y-4 mt-4">
      {tasks.length ? (
        tasks.map((task) =>
          editingTask && editingTask.id === task.id ? (
            <AddTask task={editingTask} onClose={() => setEditingTask(null)} />
          ) : (
            <div key={task.id} className="p-4 border rounded-md shadow-md">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p className="pb-4">{task.description}</p>
              <button
                onClick={() => setEditingTask(task)}
                className="px-2 py-1 bg-green-500 text-white rounded-md mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="px-2 py-1 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          )
        )
      ) : (
        <div className="p-4 border rounded-md shadow-md">No Task Found!</div>
      )}
    </div>
  );
};

export default TaskList;
