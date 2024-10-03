import Image from "next/image";
import Appbar from "./components/Appbar";

// console.log("GOOGLE_CLIENT_ID  :  ",process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE_CLIENT_SECRET  :  ",process.env.GOOGLE_CLIENT_SECRET);


export default function Home() {
  return (
    
      <main className="">
        <Appbar />
      </main>
        
    
  );
}
