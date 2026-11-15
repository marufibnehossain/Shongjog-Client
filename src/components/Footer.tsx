import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{backgroundImage: "url('/pattern-bg.png')", backgroundPosition: "center center", backgroundRepeat: "repeat"}} className="bg-herobg px-[5vw] pb-6 pt-10 sm:pt-14">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="rounded-[30px] bg-heading px-6 py-10 text-white sm:px-10 lg:px-14 lg:py-12">

          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xl font-bold"
              >
                <Image className='max-sm:w-16' src='/logo.png' alt='Logo' width={150} height={36} />
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/60">
                Connecting people with meaningful community events and
                opportunities to make a positive difference together.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <FaFacebook className="size-4" />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <FaInstagram className="size-4" />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-primary hover:text-white"
                >
                  <FaLinkedin className="size-4" />
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Platform
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-white/55">
                <li>
                  <Link
                    href="/events"
                    className="transition hover:text-primary"
                  >
                    Upcoming Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/create-event"
                    className="transition hover:text-primary"
                  >
                    Create Event
                  </Link>
                </li>

                <li>
                  <Link
                    href="/manage-events"
                    className="transition hover:text-primary"
                  >
                    Manage Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/joined-events"
                    className="transition hover:text-primary"
                  >
                    Joined Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Community
              </h3>

              <ul className="mt-5 space-y-3 text-sm text-white/55">
                <li>
                  <Link
                    href="/events"
                    className="transition hover:text-primary"
                  >
                    Find Events
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="transition hover:text-primary"
                  >
                    About Shongjog
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="transition hover:text-primary"
                  >
                    Community Stories
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="transition hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get involved */}
            <div>
              <h3 className="text-sm font-semibold text-white">
                Get involved
              </h3>

              <p className="mt-5 text-sm leading-6 text-white/55">
                Have an idea for a community event? Bring people together
                and make it happen.
              </p>

              <Link
                href="/create-event"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                Create an Event
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Contact strip */}
          <div className="mt-10 flex flex-col gap-4 rounded-[20px] bg-white/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Mail className="size-4" />
              </div>

              <div>
                <p className="text-xs text-white/40">
                  Have a question?
                </p>

                <a
                  href="mailto:hello@shongjog.com"
                  className="text-sm font-medium text-white transition hover:text-primary"
                >
                  hello@shongjog.com
                </a>
              </div>
            </div>

            <Link
              href="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-primary"
            >
              Explore community events
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col gap-3 px-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Shongjog. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;