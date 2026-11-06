"use client";
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { authClient, signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const handleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      const user = Object.fromEntries(formData.entries());  
  
      const {data, error} = await authClient.signIn.email({
        email: user.email as string,
        password: user.password as string,
        rememberMe: true,
        callbackURL: "/"
      });

      console.log("Sign in response:", data);
console.log("Sign in error:", error);

      if(data) {
        toast.success("User signed in successfully.");
      } else {
        toast.error(error.message || "Error signing in user.");
      }
    };

    const handleGoogleSignIn = async () => {
        const { error } = await signIn.social({
            provider: "google",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Error signing in with Google.");
            return;
        }
    };

    const handleGithubSignIn = async () => {
        const { error } = await signIn.social({
            provider: "github",
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Error signing in with GitHub.");
            return;
        }
    };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <Button className="cursor-pointer" onClick={handleGoogleSignIn} variant="outline" type="button">
                  <FaGoogle className="w-5 h-5" />
                  Login with Google
                </Button>
                <Button className="cursor-pointer" onClick={handleGithubSignIn} variant="outline" type="button">
                  <FaGithub className="w-5 h-5" />
                  Login with GitHub
                </Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  name="email"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <FieldError>Required</FieldError>
                </div>
                <Input id="password" type="password" name="password" required />
                <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
