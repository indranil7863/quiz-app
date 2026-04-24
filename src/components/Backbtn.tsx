"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function Backbtn() {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.back()}
        className="center-div gap-4 px-4 py-1 rounded-lg bg-button-background text-button-foreground hover:bg-button-background/50"
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>
    </>
  );
}

export default Backbtn;
