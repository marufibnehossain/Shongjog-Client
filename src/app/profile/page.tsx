import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CalendarDays, Mail, UserRound } from "lucide-react";
import ProfileForm from "@/components/ProfileForm";
import Image from "next/image";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  return (
    <main className="w-full overflow-hidden">
      {/* Hero */}
      <section className="bg-herobg footer-pattern px-[5vw] pb-14 pt-32 sm:pb-20 sm:pt-34 lg:pb-24 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stroke bg-surface px-3.5 py-2 text-xs font-semibold text-primary">
              <UserRound className="size-3.5" />
              Your Profile
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              Your{" "}
              <span className="text-primary">
                Profile
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-text sm:text-lg">
              Manage your personal information and keep your community profile
              up to date.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="bg-surface px-[5vw] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            {/* Profile Summary */}
            <div className="rounded-[28px] border border-stroke bg-background p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="flex size-28 items-center justify-center overflow-hidden rounded-full border-4 border-surface bg-primary/10 text-3xl font-bold text-primary shadow-lg">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "Profile"}
                      className="size-full object-cover"
                      width={200}
                      height={200}
                    />
                  ) : (
                    user?.name?.charAt(0).toUpperCase()
                  )}
                </div>

                <h2 className="mt-5 text-2xl font-bold text-heading">
                  {user?.name}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <Mail className="size-4" />
                  <span className="break-all">{user?.email}</span>
                </div>
              </div>

              <div className="my-6 border-t border-stroke" />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserRound className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted">
                      Account Name
                    </p>

                    <p className="mt-1 text-sm font-semibold text-heading">
                      {user?.name}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CalendarDays className="size-4" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-muted">
                      Community Member
                    </p>

                    <p className="mt-1 text-sm font-semibold text-heading">
                      Active Member
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Profile */}
            <div className="rounded-[28px] border border-stroke bg-surface p-6 shadow-sm sm:p-8">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Personal Information
                </p>

                <h2 className="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                  Update your profile
                </h2>

                <p className="mt-2 text-sm leading-6 text-text">
                  Update your name and profile picture so other community
                  members can recognize you.
                </p>
              </div>

              <ProfileForm
                name={user?.name || ""}
                email={user?.email || ""}
                image={user?.image || ""}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;