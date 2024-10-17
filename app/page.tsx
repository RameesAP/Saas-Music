import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Music, Users, Zap } from "lucide-react";
import Link from "next/link";
import Appbar from "./components/Appbar";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 ">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Appbar />
      </header>
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-800  flex items-center justify-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-400">
                Let Your Fans Choose the Beat
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                StreamTune puts the playlist in your fans' hands. Create,
                engage, and grow your audience like never before.
              </p>
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-purple-400">
              Why StreamTune?
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Users className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold text-gray-100">
                  Fan Engagement
                </h3>
                <p className="text-gray-400">
                  Let fans choose music in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold text-gray-100">
                  Instant Feedback
                </h3>
                <p className="text-gray-400">See what your audience loves.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Music className="h-12 w-12 text-purple-500" />
                <h3 className="text-xl font-bold text-gray-100">
                  Diverse Playlists
                </h3>
                <p className="text-gray-400">
                  Discover new music through fans.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-400">
                Ready to Revolutionize Your Streams?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl/relaxed">
                Join StreamTune today and create unforgettable music experiences
                with your fans.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-700 text-white border-gray-600"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">
          © 2024 StreamTune. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-gray-400 hover:text-purple-400"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-gray-400 hover:text-purple-400"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

// import Image from "next/image";
// import Appbar from "./components/Appbar";

// // console.log("GOOGLE_CLIENT_ID  :  ",process.env.GOOGLE_CLIENT_ID);
// // console.log("GOOGLE_CLIENT_SECRET  :  ",process.env.GOOGLE_CLIENT_SECRET);

// export default function Home() {
//   return (

//       <main className="">
//         <Appbar />

//       </main>

//   );
// }
