import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-[5vw] py-16">
            <div className="mx-auto max-w-xl text-center">

                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <SearchX className="size-10" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Error 404
                </p>

                <h1 className="mt-3 text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                    Page not found
                </h1>

                <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted">
                    Sorry, the page you are looking for does not exist or may
                    have been moved. Let&apos;s get you back to the Shongjog
                    community.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Button>
                        <Link href="/">
                            <ArrowLeft className="size-4" />
                            Back to Home
                        </Link>
                    </Button>

                    <Button variant="outline">
                        <Link href="/events">
                            Explore Events
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}