import CreateCollectionButton from "@/components/CreateCollectionButton";
import SadFace from "@/components/icons/SadFace";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import prisma from "@/lib/prisma";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from "react";

export default async function Home() {

  return (
    <>
      <Suspense fallback={<WelcomeMsgFallback />}>

        <WelcomeMsg />
        <CollectionList />
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
    <div className="flex w-full mb-12">
      <h1 className="text-4xl font-bold">
        Welcome,  <br /> {user.firstName} {user.lastName}
      </h1>

    </div>


  )

}

function WelcomeMsgFallback() {
  return (<div>Loading...</div>)
}

async function CollectionList() {
  const user = await currentUser();
  const collection = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    }
  })
  if (collection.length === 0) {
    return (
      <div className="flex flex-col gap-5">

        <Alert>
          <SadFace />
          <AlertTitle>There Are Not Collections Yet</AlertTitle>
          <AlertDescription>Create Collection To Get Started</AlertDescription>
        </Alert>
        <CreateCollectionButton/>
      </div>

    )
  }
}