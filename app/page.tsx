import Link from 'next/link';
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import { Component } from 'react';

interface PageProps {
  pageProps: any;
}

export default class Page extends Component<PageProps> {
  render() {
    const { pageProps } = this.props;
    return (
      <ClerkProvider>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Component {...pageProps} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}></Component>
      </ClerkProvider>
    );
  }
}