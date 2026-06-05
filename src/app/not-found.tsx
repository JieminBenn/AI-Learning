import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <span className="eyebrow">404</span>
        <h1>This lesson is not in the curriculum yet.</h1>
        <p>Return to the overview and keep moving through the mapped topics.</p>
        <Link className="button button--primary" href="/curriculum">
          Open curriculum
        </Link>
      </section>
    </main>
  );
}
