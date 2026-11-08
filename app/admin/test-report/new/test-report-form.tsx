"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Check, ChevronsUpDown, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import type { ActiveTestOption } from "@/lib/services/test.service";
import {
  testReportSchema,
  type TestReportFormValues,
} from "@/lib/validations/test-report.schema";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { createTestReport } from "./actions";

type TestReportFormProps = {
  tests: ActiveTestOption[];
};

export function TestReportForm({ tests }: TestReportFormProps) {
  const [testOpen, setTestOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const form = useForm<TestReportFormValues>({
    resolver: zodResolver(testReportSchema),
    mode: "onChange", 
    defaultValues: {
      testId: "",
      clientName: "",
      address: "",
      serviceDescription: "",
      regulation: "",
      studyScope: "",
      testStartDate: "",
      testEndDate: "",
      finalReportDate: "",
    },
  });

 
  const errors = form.formState.errors;

  console.log(form.formState.errors)
async function handleFormSubmit(values: TestReportFormValues) {
    console.log(form.formState.errors)
  setSubmitError(null);
  setSubmitSuccess(null);
  setIsSubmitting(true);

  try {
    const result = await createTestReport(values);

    if (!result.success) {
      setSubmitError(result.error);
      return;
    }

    setSubmitSuccess(`Report ${result.reportNo} created successfully.`);

    form.reset();
  } catch {
    setSubmitError("Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <form
      onSubmit={form.handleSubmit(handleFormSubmit)}
      className="space-y-8"
      noValidate
    >
      {/* Test Information */}
      <section className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">Test Information</h2>
          <p className="text-sm text-muted-foreground">
            Select the laboratory test and enter report details.
          </p>
        </div>

        <FieldGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Test Name Combobox */}

          <Controller
            name="testId"
            control={form.control}
            render={({ field, fieldState }) => {
              const selectedTest = tests.find(
                (test) => test.id === field.value,
              );

              return (
                <Field
                  data-invalid={fieldState.invalid}
                  className="sm:col-span-2"
                >
                  <FieldLabel>
                    Test Name <span className="text-destructive">*</span>
                  </FieldLabel>

                  <Popover open={testOpen} onOpenChange={setTestOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        role="combobox"
                        aria-expanded={testOpen}
                        aria-invalid={fieldState.invalid}
                        disabled={tests.length === 0}
                        className="w-full justify-between font-normal"
                      >
                        {selectedTest ? (
                          <span className="truncate">
                            {selectedTest.name} ({selectedTest.code})
                          </span>
                        ) : (
                          <span className="text-muted-foreground">
                            Search and select a test...
                          </span>
                        )}

                        <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent
                      className="w-(--radix-popover-trigger-width) p-0"
                      align="start"
                    >
                      <Command>
                        <CommandInput placeholder="Search test name or code..." />

                        <CommandList>
                          <CommandEmpty>No matching tests found.</CommandEmpty>

                          <CommandGroup heading="Available Tests">
                            {tests.map((test) => (
                              <CommandItem
                                key={test.id}
                                value={`${test.name} ${test.code}`}
                                onSelect={() => {
                                  field.onChange(test.id);
                                  setTestOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 size-4",
                                    field.value === test.id
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />

                                <div className="flex flex-col">
                                  <span className="font-medium">
                                    {test.name}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    Code: {test.code}
                                  </span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  {selectedTest?.description && (
                    <FieldDescription>
                      {selectedTest.description}
                    </FieldDescription>
                  )}

                  <FieldError errors={[fieldState.error]} />
                </Field>
              );
            }}
          />

          {/* Client Name */}
          <Field data-invalid={Boolean(errors.clientName)}>
            <FieldLabel htmlFor="clientName">
              Client Name <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              id="clientName"
              placeholder="Enter client or company name"
              maxLength={200}
              aria-invalid={Boolean(errors.clientName)}
              {...form.register("clientName")}
            />

            <FieldError errors={[errors.clientName]} />
          </Field>

          {/* Report Number */}
          <Field>
            <FieldLabel htmlFor="reportNo">Report Number</FieldLabel>

            <Input id="reportNo" value="Generated automatically" disabled />

            <FieldDescription>
              Assigned securely by the server during report creation.
            </FieldDescription>
          </Field>

          {/* Address */}
          <Field
            data-invalid={Boolean(errors.address)}
            className="sm:col-span-2"
          >
            <FieldLabel htmlFor="address">
              Client Address <span className="text-destructive">*</span>
            </FieldLabel>

            <Textarea
              id="address"
              placeholder="Enter complete client address"
              rows={3}
              aria-invalid={Boolean(errors.address)}
              {...form.register("address")}
            />

            <FieldError errors={[errors.address]} />
          </Field>
        </FieldGroup>
      </section>

      {/* Service Details */}
      <section className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">Service Details</h2>
          <p className="text-sm text-muted-foreground">
            Provide the testing service, applicable regulation and study scope.
          </p>
        </div>

        <FieldGroup className="grid grid-cols-1 gap-5">
          <Field data-invalid={Boolean(errors.serviceDescription)}>
            <FieldLabel htmlFor="serviceDescription">
              Service Description <span className="text-destructive">*</span>
            </FieldLabel>

            <Textarea
              id="serviceDescription"
              placeholder="Describe the testing services provided..."
              rows={3}
              aria-invalid={Boolean(errors.serviceDescription)}
              {...form.register("serviceDescription")}
            />

            <FieldError errors={[errors.serviceDescription]} />
          </Field>

          <Field data-invalid={Boolean(errors.regulation)}>
            <FieldLabel htmlFor="regulation">
              Regulation / Standard <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              id="regulation"
              placeholder="e.g. ISO 10993-5:2009"
              maxLength={200}
              aria-invalid={Boolean(errors.regulation)}
              {...form.register("regulation")}
            />

            <FieldError errors={[errors.regulation]} />
          </Field>

          <Field data-invalid={Boolean(errors.studyScope)}>
            <FieldLabel htmlFor="studyScope">
              Study Scope <span className="text-destructive">*</span>
            </FieldLabel>

            <Textarea
              id="studyScope"
              placeholder="Describe the scope and objectives of the study..."
              rows={4}
              aria-invalid={Boolean(errors.studyScope)}
              {...form.register("studyScope")}
            />

            <FieldError errors={[errors.studyScope]} />
          </Field>
        </FieldGroup>
      </section>

      {/* Important Dates */}
      <section className="rounded-xl border bg-card p-5 shadow-sm sm:p-6">
        <div className="mb-6 space-y-1">
          <h2 className="text-lg font-semibold">Important Dates</h2>
          <p className="text-sm text-muted-foreground">
            Specify the testing period and final report date.
          </p>
        </div>

        <FieldGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Field data-invalid={Boolean(errors.testStartDate)}>
            <FieldLabel htmlFor="testStartDate">
              Test Start Date <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              id="testStartDate"
              type="date"
              aria-invalid={Boolean(errors.testStartDate)}
              {...form.register("testStartDate")}
            />

            <FieldError errors={[errors.testStartDate]} />
          </Field>

          <Field data-invalid={Boolean(errors.testEndDate)}>
            <FieldLabel htmlFor="testEndDate">
              Test End Date <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              id="testEndDate"
              type="date"
              aria-invalid={Boolean(errors.testEndDate)}
              {...form.register("testEndDate")}
            />

            <FieldError role="alert" errors={[errors.testEndDate]} />
          </Field>

          <Field
            data-invalid={Boolean(errors.finalReportDate)}
            className="sm:col-span-2 lg:col-span-1"
          >
            <FieldLabel htmlFor="finalReportDate">
              Final Report Date <span className="text-destructive">*</span>
            </FieldLabel>

            <Input
              id="finalReportDate"
              type="date"
              aria-invalid={Boolean(errors.finalReportDate)}
              {...form.register("finalReportDate")}
            />

            <FieldError errors={[errors.finalReportDate]} />
          </Field>
        </FieldGroup>
      </section>
      {submitSuccess && (
        <div
          role="status"
          className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800 dark:border-green-900 dark:bg-green-950 dark:text-green-300"
        >
          {submitSuccess}
        </div>
      )}
      {/* Submission */}
      {submitError && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-lg border border-muted bg-muted/50 p-4 text-sm"
        >
          {submitError}
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="outline"
          disabled={isSubmitting}
          onClick={() => {
            form.reset();
            setSubmitError(null);
          }}
        >
          Reset Form
        </Button>

        <Button type="submit" disabled={isSubmitting || tests.length === 0}>
          {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
          Create Report
        </Button>
      </div>
    </form>
  );
}
