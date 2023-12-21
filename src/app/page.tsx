import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="mb-10 mt-24 sm:mt-36 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-1 shadow-md overflow-hidden rounded-full border border-slate-200 hover:bg-white/50te-200 px-5 py-2 backdrop-blur transition-all hover:border-slate-500">
          <p className="text-xl font-semibold text-gray-800">Chat with PDF</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">Document</span> in
          seconds.
        </h1>
        <p className="mt-4 max-x-prose text-slate-700 sm:text-lg">
          This Website allow you to have conversation with any pdf document,
          simply upload your file and start asking question right away.
        </p>
        <Link
          href="/"
          className={cn("mt-6", buttonVariants())}
        >
          Get Started <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </MaxWidthWrapper>

      {/** Image Ring */}

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-60 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 mb-32 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/10 p-2 ring-3 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Feature section */}
      <div className="mx-auto mb-28 mt-28 max-w-5xl sm:mt-52">
        <div className="mb-10 px-5 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-800 sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chatting ith your PDF files become easier than you think!
            </p>
          </div>
        </div>

        {/*List of Steps */}
        <ol className="my-8 space-y-4 pt-6 md:flex md:space-x-12 pl-4 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-3 pl-3 border-l-4 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 1</span>
              <span className="text-xl font-semibold">
                Sign up for an account
              </span>
              <span className="mt-3 text-slate-700">
                Either start with free plan or with our{" "}
                <Link
                  href="/pricing"
                  className="text-blue-700 text-md font-semibold underline underline-offset-8"
                >
                  Pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-3 border-l-4 pl-3 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 2</span>
              <span className="text-xl font-semibold">
                Upload your PDF file
              </span>
              <span className="mt-3 text-slate-700">
                We&apos;ll proccess your file read it and make it ready to chat
                with you!
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-3 border-l-4 pl-3 border-slate-500 md:border-l-0 md:border-t-2  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-blue-600">Step 3</span>
              <span className="text-xl font-semibold">
                Start asking questions
              </span>
              <span className="mt-3 text-slate-700">
                It&apos;s simple and easy to chat with your PDF in real
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 mb-32 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/10 p-2 ring-3 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload.jpg"
                alt="product preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
