"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AlertDialogDemo = ({eventId} : {eventId: string}) => {
    const router = useRouter();
    const handleDelete = async () => {
      const { data: jwtToken } = await authClient.token();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${eventId}`, {
          method: 'DELETE',
          headers: {
              Authorization: `Bearer ${jwtToken?.token}`,
          },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to delete event.");
        return;
      }

      toast.success("Event deleted successfully.");
      router.push('/events');
      router.refresh();
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button className="rounded-lg px-4 py-1.5 text-sm cursor-pointer" variant="destructive" size="sm">Delete</Button>} />
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete event</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this event.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="bg-white">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default AlertDialogDemo;
