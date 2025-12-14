"use client";
import { useState } from "react";
import { Nunito } from "next/font/google";
import { Slider } from "@/components/ui/slider";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function DonateSection() {
  const [amount, setAmount] = useState(1000);

  return (
    <section
      className={`${nunito.className} w-full px-4 md:px-10 py-10 bg-gray-50`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Donation Amount
          </h2>

          {/* QUICK BUTTONS */}
          <div className="grid py-4 grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[125, 250, 500, 1000].map((item) => (
              <button
                key={item}
                onClick={() => setAmount(item)}
                className={`py-2 rounded-lg border text-sm font-semibold
                  ${
                    amount === item
                      ? "bg-[#8a5854] text-white border-[#8a5854]"
                      : "border-gray-300 text-gray-700"
                  }`}
              >
                ${item}
              </button>
            ))}
          </div>

          {/* AMOUNT DISPLAY */}
          <div className="text-center py-2 mb-3">
            <p className="text-gray-700 font-medium">You’re donating</p>
            <p className="text-3xl mt-2 md:text-4xl font-bold text-[#8a5854]">
              ${amount}
            </p>
          </div>

          {/* SLIDER */}

          <Slider
            value={[amount]}
            onValueChange={(v) => setAmount(v[0])}
            min={10}
            max={1000}
            step={1}
          />

          {/* STATS BOX */}
          <div className="mt-8 bg-blue-50 shadow-inner rounded-xl p-6 text-center">
            <p className="font-medium text-sm text-gray-700">
              {Math.round(amount / 120)} animals sterilized
            </p>

            <p className="text-4xl font-bold text-[#8a5854] mt-2">
              {Math.round(amount * 1.944)}
            </p>

            <p className="mt-2 text-gray-600 text-sm">
              unwanted births prevented
            </p>

            <p className="mt-3 text-[11px] text-gray-500 italic leading-tight">
              *Based on 1 male and 1 female in 5 years under exponential growth.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}

        <div className="flex shadow-lg rounded-3xl p-6 md:p-8  w-full max-w-6xl flex-col gap-6">
          <Tabs defaultValue="account">
            <TabsList className={`mb-4`}>
              <TabsTrigger className={`px-10  py-5`} value="account">
                {" "}
                Credit Card
              </TabsTrigger>
              <TabsTrigger className={`px-10  py-5`} value="password">
                {" "}
                PayPal
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <Input className="w-full" placeholder="First Name *" />
                <Input className="w-full" placeholder="Last Name *" />

                <Input
                  className="w-full md:col-span-2"
                  placeholder="Email Address *"
                />
                <Input
                  className="w-full md:col-span-2"
                  placeholder="Phone Number"
                />

                <Input
                  className="w-full md:col-span-2"
                  placeholder="Card Number"
                />

                <Input className="w-full" placeholder="MM/YY" />
                <Input className="w-full" placeholder="CVV" />
                <Input className="w-full" placeholder="ZIP *" />

                <Input
                  className="w-full md:col-span-2"
                  placeholder="Address *"
                />

                <Input className="w-full" placeholder="City *" />
                <Input className="w-full" placeholder="State *" />
              </form>

              <Button className="w-full mt-6 bg-[#8a5854] transition text-white py-6 rounded-lg font-semibold text-base">
                {`Donate USD ${amount} Now`}
              </Button>
            </TabsContent>
            <TabsContent value="password">
              <div className={`text-center text-gray-600  flex flex-col gap-6   py-6 `}>
                
                
                  
                  <p className="text-base font-semibold"> You will be redirected to PayPal to complete your donation securely.</p>
                 
             
                <div className="grid gap-6">
               <p className="text-sm"> After clicking the button below, you will be taken to PayPal where you can log in to your account or pay with a credit/debit card.</p>
               <Button className="w-full mt-6 bg-[#8a5854] transition text-white py-6 rounded-lg font-semibold text-base">Continue to Paypal</Button>


                </div>
               
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          @apply border border-gray-300 rounded-lg px-4 py-3 text-sm w-full;
        }
      `}</style>
    </section>
  );
}
