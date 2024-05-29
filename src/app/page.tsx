"use client";
import AddTask from "@/components/AddTask";
import TaskList from "@/components/TaskList";
import { useState } from "react";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <button
        onClick={() => setShowForm(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Add Task
      </button>
      {showForm && <AddTask onClose={() => setShowForm(false)} />}
      <TaskList />
    </div>
  );
}
