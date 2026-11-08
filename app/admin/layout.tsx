import Link from "next/link";
import { requireAdmin } from "@/lib/auth/admin";
import { UserButton } from "@clerk/nextjs";

const navigation = [
  {
    label: "Test Catalog",
    href: "/admin/test-catalog/new",
  },
  {
    label: "Create Test Report",
    href: "/admin/test-report/new",
  },
];

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const admin = await requireAdmin();

  const adminName =
    admin.firstName || admin.emailAddresses[0]?.emailAddress || "Administrator";

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="flex min-h-screen flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full border-b bg-background md:w-64 md:border-b-0 md:border-r">
          <div className="border-b px-6 py-5">
            <Link href="/admin" className="text-xl font-bold tracking-tight">
              Veritas<span className="text-primary">Lab</span>
            </Link>

            <p className="mt-1 text-xs text-muted-foreground">
              Administration Panel
            </p>
          </div>

          <nav
            aria-label="Admin navigation"
            className="flex gap-2 overflow-x-auto p-3 md:flex-col md:gap-1"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden border-t p-4 md:mt-auto md:block">
            <p className="text-xs text-muted-foreground">Signed in as</p>
            <p className="mt-1 truncate text-sm font-medium">{adminName}</p>
            <UserButton />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="flex h-16 items-center justify-between border-b bg-background px-6">
            <p className="text-sm font-medium">VeritasLab Administration</p>

            <span className="text-xs text-muted-foreground">Administrator</span>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
