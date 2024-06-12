// app/page.tsx
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

interface PageProps {
  pageProps: {
    publishableKey: string
    [key: string]: any
  }
}

export default function Page({ pageProps }: PageProps) {
  return (
    <ClerkProvider {...pageProps}>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </ClerkProvider>
  )
}