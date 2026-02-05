import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { projects } from "@/app/data/projects";
import { EmptyState } from "@/components/empty-state";

export default function ProjectsPage() {
  // ✅ Empty State
  if (projects.length === 0) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Button asChild>
            <Link href="/dashboard/projects/create">Create Project</Link>
          </Button>
        </div>

        <EmptyState
          title="No projects yet"
          description="You haven’t created any projects yet."
          actionLabel="Create Project"
        />
      </div>
    );
  }

  // ✅ מצב רגיל
  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/dashboard/projects/create">Create Project</Link>
        </Button>
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <p className="text-muted-foreground">Manage and track your tasks</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>{project.name}</TableCell>
              <TableCell>{project.tasks}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    project.status === "Completed" ? "secondary" : "default"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
