
import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import type { AppProps } from 'next/app';

import { Component } from 'react';
export default function Page() {
  return (
    <ClerkProvider>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    {/* <Component {...pageProps} /> */}
  </ClerkProvider>
  );
}
