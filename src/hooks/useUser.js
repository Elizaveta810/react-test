import { useContext } from "react";
import { UserContext } from "../contexts/user";
import { TaskContext } from "../contexts/task";

export function useUser() {
  return useContext(UserContext);
}

export function useTask() {
  return useContext(TaskContext)
}