import Image from "next/image";
import { SignupForm } from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 px-[5vw] pt-34 md:pb-10">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <Image className='max-sm:w-16 dark:hidden' src='/logo.png' alt='Logo' width={150} height={36} />
        <Image className='max-sm:w-16 hidden dark:block' src='/logo-light.png' alt='Logo' width={150} height={36} />
        <SignupForm />
      </div>
    </div>
  )
}
