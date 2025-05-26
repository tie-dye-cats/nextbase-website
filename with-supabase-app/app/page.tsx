"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          How Can We Fix Your Broken <span className="text-[#25F4EE]">TikTok</span> Ad Accounts<br />
          So You Can Stop Wasting Money And Grow Your Business Right Now?
        </h1>
        <button
          className="mt-8 bg-white text-black text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:bg-[#25F4EE] hover:text-white transition"
          onClick={() => setOpen(true)}
        >
          Message an Expert--Get a FREE Response in 1-Hour
        </button>
        <p className="text-white text-opacity-80 mt-6 max-w-xl mx-auto">
          (Trust us, we hate sales calls and wanna puke every time we get a "free marketing audit" in our inbox. We ain't got time for dat and neither do you.)
        </p>
      </div>
      {/* Modal dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>How can we help you?</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Your Name"
              autoComplete="name"
            />
            <input
              className="border rounded p-2"
              type="email"
              placeholder="Your Email"
              autoComplete="email"
              required
            />
            <textarea
              className="border rounded p-2"
              placeholder="How can we help?"
              rows={4}
            />
            <p className="text-xs text-gray-500 mt-2">
              By submitting this form, you consent to being contacted by AdVelocity via email. We respect your privacy and will never share your information. Unsubscribe any time.
            </p>
          </div>
          <DialogFooter>
            <button
              className="bg-[#25F4EE] text-white px-4 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Submit (does nothing yet)
            </button>
            <DialogClose asChild>
              <button className="ml-2 text-gray-500 hover:text-black">Cancel</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
