import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-12">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
