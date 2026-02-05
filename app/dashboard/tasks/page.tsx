"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";

import { getTasks, Task } from "@/app/data/tasks";

type Status = "All" | "Completed" | "In Progress";

export default function TasksPage() {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState<Status>("All");

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const filteredTasks =
    status === "All" ? tasks : tasks.filter((t) => t.status === status);

  if (filteredTasks.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between">
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

        <EmptyState
          title="No tasks found"
          description="You haven’t created any tasks yet."
          actionLabel="Create Task"
          onAction={() => router.push("/dashboard/tasks/create")}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
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
            <TableHead>Name</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((t, i) => (
            <TableRow key={i}>
              <TableCell>{t.name}</TableCell>
              <TableCell>{t.project}</TableCell>
              <TableCell>{t.status}</TableCell>
              <TableCell>{t.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
