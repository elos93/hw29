"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-2">
        <Label>Username</Label>
        <Input placeholder="Your name" />
      </div>

      <div className="space-y-2">
        <Label>Email</Label>
        <Input type="email" placeholder="you@example.com" />
      </div>

      <Button>Save</Button>
    </div>
  );
}
