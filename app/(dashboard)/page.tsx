import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>

        <WelcomeMsg />
      </Suspense>

    </>


  )
}

async function WelcomeMsg() {
  const user = await currentUser()
  if (!user) {
    return <div>error</div>
  }
  return (
    <div className="flex w-full">
      <h1 className="text-4xl font-bold">
        Welcome,  <br /> {user.firstName} {user.lastName}
      </h1>

    </div>


  )

}

function WelcomeMsgFallback() {
  return (<div>Loading...</div>)
}