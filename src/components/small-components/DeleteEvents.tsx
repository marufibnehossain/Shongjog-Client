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
import { redirect } from "next/navigation"

const AlertDialogDemo = ({eventId} : {eventId: string}) => {
    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/events/${eventId}`, {
            method: 'DELETE',
        });

        const data = await res.json();
        redirect('/events');
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
