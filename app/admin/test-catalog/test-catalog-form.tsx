"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createTestAction, TestCatalogState } from "./actions";

 
const initialState: TestCatalogState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Adding Test..." : "Add Test"}
    </Button>
  );
}

export function TestCatalogForm() {
  const [state, formAction] = useActionState(createTestAction, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Test Name <span className="text-destructive">*</span>
          </Label>

          <Input
            id="name"
            name="name"
            placeholder="e.g. Nickel Release Test"
            maxLength={150}
            required
            aria-invalid={!!state.fieldErrors?.name}
          />

          {state.fieldErrors?.name?.map((error) => (
            <p key={error} className="text-sm text-destructive">
              {error}
            </p>
          ))}
        </div>

        <div className="space-y-2">
          <Label htmlFor="code">
            Test Code <span className="text-destructive">*</span>
          </Label>

          <Input
            id="code"
            name="code"
            placeholder="e.g. NRT-001"
            maxLength={12}
            required
            aria-invalid={!!state.fieldErrors?.code}
          />

          <p className="text-xs text-muted-foreground">
            Maximum 12 characters. Must be unique.
          </p>

          {state.fieldErrors?.code?.map((error) => (
            <p key={error} className="text-sm text-destructive">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>

        <Textarea
          id="description"
          name="description"
          placeholder="Enter test description..."
          rows={4}
        />
      </div>

      <div className="flex items-center gap-3">
        <input
          id="isActive"
          name="isActive"
          type="checkbox"
          value="true"
          defaultChecked
          className="size-4 accent-primary"
        />

        <Label htmlFor="isActive" className="cursor-pointer">
          Active
        </Label>
      </div>

      {state.message && (
        <p
          role="status"
          aria-live="polite"
          className={
            state.status === "success"
              ? "text-sm text-green-600"
              : "text-sm text-destructive"
          }
        >
          {state.message}
        </p>
      )}

      <div className="flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}
