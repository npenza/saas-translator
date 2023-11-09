"use client"

import { subscriptionRef } from '@/lib/converters/Subscription'
import { useSubscriptionStore } from '@/store/store'
import { onSnapshot } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { ReactNode, useEffect } from 'react'

function SubscriptionProvider({children} : {children : ReactNode}) {

    const { data : session} = useSession()
    const setSubscription = useSubscriptionStore((state) => state.setSubscription)

    useEffect(() => {

        if (!session) return

         return onSnapshot(subscriptionRef(session?.user.id), (snapshot) => {
            if (snapshot.empty){
                setSubscription(null)
            } else {
                console.log("user has subscription") 
                //set subscription
                setSubscription(snapshot.docs[0].data())
            }
         },(error) => {
            console.log(error)
         })
    }, [session , setSubscription])
    
  return <>{children}</>
}

export default SubscriptionProvider
