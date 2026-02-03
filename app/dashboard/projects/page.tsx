import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const projects = [
  { name: "Website", tasks: 6, status: "Active" },
  { name: "Backend", tasks: 4, status: "Active" },
  { name: "QA", tasks: 2, status: "Completed" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Projects</h1>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Tasks</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((p, i) => (
            <TableRow key={i}>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.tasks}</TableCell>
              <TableCell>
                <Badge
                  variant={p.status === "Completed" ? "secondary" : "default"}
                >
                  {p.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
