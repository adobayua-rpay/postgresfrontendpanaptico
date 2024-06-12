import { SignIn } from "@clerk/nextjs";
import Sidebar from './sidebar'
export default function Page() {
  return (
    <Sidebar />
    // <main className="flex min-h-screen w-full items-center justify-between">
    //   <div className="mx-auto">
    //     <SignIn />
    //   </div>
    // </main>
  )
}