import { useContext } from "react";
import { TaskContext } from "../contexts/task";

export function useTask() {
  return useContext(TaskContext)
}