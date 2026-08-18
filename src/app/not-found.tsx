import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-display font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl font-display font-semibold mb-2">
          Lost in the digital space?
        </h1>
        <p className="text-foreground-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back Home →
        </Link>
      </div>
    </div>
  );
}
