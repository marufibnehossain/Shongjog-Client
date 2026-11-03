"use client";

import { signOut, useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AccountMenu = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        const { error } = await signOut();

        if (error) {
            toast.error("You are not signed in");
            return;
        }

        toast.success("Successfully signed out");
        router.push("/");
    };

    if (isPending) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-ring loading-xl"></span>
            </div>
    )}

    if (!session?.user) {
        return (
            <div className="flex items-center sm:gap-5 gap-2">
                <Link href="/sign-in" className='max-sm:text-xs'>Sign in</Link>
                <Link href="/sign-up" className='btn-global max-sm:p-2! max-sm:text-xs!'>Sign up</Link>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
                <div
                    tabIndex={0}
                    role="button"
                    className="cursor-pointer flex items-center gap-2"
                >
                    <div className="w-10 rounded-lg overflow-hidden">
                        <Image
                            width={40}
                            height={40}
                            src={session.user.image || "/default-avatar.webp"}
                            alt={session.user.name}
                        />
                    </div>
                    <span className='max-sm:hidden'>{session.user.name}</span>
                </div>

                <ul
                    tabIndex={-1}
                    className="menu menu-sm dropdown-content bg-surface rounded-2xl z-1 mt-3 w-52 px-5 py-4 border border-stroke flex flex-col gap-3"
                >
                    <li>
                        <div className="flex flex-col items-start gap-0.5">
                            <h2 className="text-sm font-bold text-heading">
                                {session.user.name}
                            </h2>
                            <span className="text-xs text-heading opacity-70">
                                {session.user.email}
                            </span>
                        </div>
                    </li>

                    <li>
                        <Link href="events/create">
                            Create Event
                        </Link>
                        <Link href="events/manage">
                            Manage Events
                        </Link>
                        <Link href="events/joined">
                            Joined Events
                        </Link>
                    </li>

                    <li className="text-danger">
                        <button onClick={handleSignOut}>
                            ↩ Sign out
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AccountMenu;