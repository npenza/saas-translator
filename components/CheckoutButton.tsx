"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { useSession } from "next-auth/react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // push doc to firestore db
    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers", session.user.id, "checkout_sessions"),
      {
        price: "price_1OASBRFb3VFyMCALTTmet5TT",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      },
    );

    // stripe extension on firbase creates a a checkout session

    return onSnapshot(docRef, (snap) => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if (error) {
        alert("Error occured, Stripe is not connected");
        setLoading(false);
      }

      if (url) {
        window.location.assign(url);
        setLoading(false);
      }
    });

    // redirect user to checkout page
  };

  return (
    <div className="flex flex-col space-y-2">
      <Button onClick={createCheckoutSession}>{loading ? 'loading...' : "Sign Up"}</Button>
    </div>
  );
}

export default CheckoutButton;
