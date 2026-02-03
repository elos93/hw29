"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function CreateTaskPage() {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      taskName,
      description,
      project,
      status,
      priority,
    };

    console.log("New Task:", newTask);
    alert("Task created (mock)");

    // reset (אופציונלי)
    setTaskName("");
    setDescription("");
    setProject("");
    setStatus("");
    setPriority("");
  };

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold">Create Task</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Name */}
        <div className="space-y-2">
          <Label htmlFor="taskName">Task Name</Label>
          <Input
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter task name"
            required
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Task description"
          />
        </div>

        {/* Project */}
        <div className="space-y-2">
          <Label>Project</Label>
          <Select value={project} onValueChange={setProject}>
            <SelectTrigger>
              <SelectValue placeholder="Select project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Website">Website</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="QA">QA</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label>Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Priority */}
        <div className="space-y-2">
          <Label>Priority</Label>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full">
          Create Task
        </Button>
      </form>
    </div>
  );
}
