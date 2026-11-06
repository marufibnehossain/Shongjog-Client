"use client"

import {
  SquareKanbanPlus,
  CalendarCheck,
  SquarePen,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from "@/lib/auth-client"
import { toast } from "react-toastify"
import { redirect } from "next/navigation";
import Link from "next/link";


export function DropdownMenuAvatar() {
    const { data: session, isPending } = useSession();
    console.log("Session:", session?.user);
    const handleSignOut = async () => {
        const { error } = await signOut();

        if (error) {
            toast.error("You are not signed in");
            return;
        }

        toast.success("Successfully signed out");
        redirect("/");
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
                {/* <Link href="/sign-up" className='btn-global max-sm:p-2! max-sm:text-xs!'>Sign up</Link> */}
            </div>
        );
    }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><Avatar>
          <AvatarImage src={session?.user.image || ""} alt="profile image" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar></Button>} />
      <DropdownMenuContent className="w-40" align="end">
        <DropdownMenuItem>
          <Avatar>
            <AvatarImage src={session?.user.image || ""} alt="profile image" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <p>{session?.user.name}</p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <SquareKanbanPlus />
            Create Event
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" >
            <SquarePen />
            Manage Events
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <CalendarCheck />
            Joined Events
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
