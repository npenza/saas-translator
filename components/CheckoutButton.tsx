"use client";

import React from "react";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

function CheckoutButton() {
  const session = getServerSession(authOptions);

  const createCheckoutSession = async () => {
    if (!session) return;
    // push doc to firestore db
    // stripe extension on firbase creates a a checkout session
    // redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button onClick={createCheckoutSession}>Sign Up</Button>
    </div>
  );
}

export default CheckoutButton;
