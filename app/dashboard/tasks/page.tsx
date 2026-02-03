"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Status = "All" | "Completed" | "In Progress";

const tasks = [
  {
    name: "Design UI",
    project: "Website",
    status: "Completed",
    priority: "High",
  },
  {
    name: "Build API",
    project: "Backend",
    status: "In Progress",
    priority: "Medium",
  },
  {
    name: "Write Tests",
    project: "QA",
    status: "In Progress",
    priority: "Low",
  },
];

export default function TasksPage() {
  const [status, setStatus] = useState<Status>("All");

  const filteredTasks =
    status === "All" ? tasks : tasks.filter((t) => t.status === status);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tasks</h1>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Button asChild>
          <Link href="/dashboard/tasks/create">Create Task</Link>
        </Button>
      </div>

      <Tabs value={status} onValueChange={(v) => setStatus(v as Status)}>
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Completed">Completed</TabsTrigger>
          <TabsTrigger value="In Progress">In Progress</TabsTrigger>
        </TabsList>
      </Tabs>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task Name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filteredTasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task.name}</TableCell>
              <TableCell>{task.project}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
