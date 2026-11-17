"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface ProfileFormProps {
  name: string;
  email: string;
  image: string;
}

const ProfileForm = ({
  name,
  email,
  image,
}: ProfileFormProps) => {
  const [profileName, setProfileName] = useState(name);
  const [profileImage, setProfileImage] = useState(image);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!profileName.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!profileImage.trim()) {
      toast.error("Please enter your profile image URL.");
      return;
    }

    setIsUpdating(true);

    const { error } = await authClient.updateUser({
      name: profileName,
      image: profileImage,
    });

    setIsUpdating(false);

    if (error) {
      toast.error(error.message || "Failed to update profile.");
      return;
    }

    toast.success("Profile updated successfully.");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="profile-name">
            Full Name
          </FieldLabel>

          <Input
            id="profile-name"
            type="text"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            placeholder="Your full name"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="profile-email">
            Email
          </FieldLabel>

          <Input
            id="profile-email"
            type="email"
            value={email}
            disabled
          />

          <FieldDescription>
            Your email address cannot be changed here.
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="profile-image">
            Profile Image URL
          </FieldLabel>

          <Input
            id="profile-image"
            type="url"
            value={profileImage}
            onChange={(e) => setProfileImage(e.target.value)}
            placeholder="https://example.com/profile.jpg"
          />

          <FieldDescription>
            Use a direct URL to your profile image.
          </FieldDescription>
        </Field>

        {/* Preview */}
        {profileImage && (
          <div className="rounded-2xl border border-stroke bg-background p-4">
            <p className="mb-3 text-sm font-semibold text-heading">
              Image Preview
            </p>

            <div className="flex items-center gap-4">
              <Image
                width={150}
                height={150}
                src={profileImage}
                alt="Profile preview"
                className="size-16 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-heading">
                  {profileName || "Your Name"}
                </p>

                <p className="text-sm text-muted">
                  Profile preview
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isUpdating}
            className="cursor-pointer"
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
};

export default ProfileForm;