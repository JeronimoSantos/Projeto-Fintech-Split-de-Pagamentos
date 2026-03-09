"use client"
import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import Link from 'next/link'

export default function App() {
  return (
    <>
    <main className="flex flex-col">
      <h1 className="flex">Welcom my hotel</h1>
       <Dashboard/>
    </main>
    </>
  )
};
