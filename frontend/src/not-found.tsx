"use client"

import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <h3>Página Não Encontrada</h3>
            <Link href={"/cafe"}>Página Principal</Link>
        </>
    )
}
