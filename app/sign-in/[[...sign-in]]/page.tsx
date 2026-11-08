import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

function SignInContent() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Veritas<span className="text-primary">Lab</span>
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Laboratory Administration Portal
          </p>
        </div>

        <div className="flex justify-center">
          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-in"
            fallbackRedirectUrl="/admin"
            appearance={{
              elements: {
                card: "shadow-lg border",
                headerTitle: "text-xl font-semibold",
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default function SignInPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading sign in...
        </div>
      }
    >
      <SignInContent />
    </Suspense>
  );
}
