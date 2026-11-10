import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy (request: NextRequest) {
//   return NextResponse.redirect(new URL('/home', request.url))
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    if (!user) {
        return NextResponse.redirect(new URL('/sign-in', request.url))
    }
    return NextResponse.next()
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ['/events/create', '/events/joined', '/events/manage'],
}