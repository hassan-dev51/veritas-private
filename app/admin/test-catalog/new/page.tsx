import { TestCatalogForm } from "../test-catalog-form";

 
export default function NewTestPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Add Test</h1>

        <p className="text-sm text-muted-foreground">
          Add a new test to your laboratory test catalog.
        </p>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <TestCatalogForm />
      </div>
    </div>
  );
}
