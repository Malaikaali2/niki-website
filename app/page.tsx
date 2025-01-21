'use client'

import React from "react"
import Hero from "@/components/HERO"
import BEST from "@/components/BEST"
import Featured from "@/components/FEATURED"
import GearUp from "@/components/GEARUP"
import DontMiss from "@/components/DONTMISS"
import Essential from "@/components/ESSENTIAL"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
  <main>
    <Hero/>
    <BEST/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
)
}
