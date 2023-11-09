"use client"

import { useSubscriptionStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

function UpgradeBanner() {

const subscription = useSubscriptionStore((state) => state.subscription)

    const isPro =  subscription?.status === "active"
    const router = useRouter();

    if(subscription === null || isPro) return null

  return (
    <div>
      <Button onClick={() => router.push("/pricing")}>Upgrade to pro!</Button>
    </div>
  )
}

export default UpgradeBanner
