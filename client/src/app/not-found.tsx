import { Button } from "@/components/Atoms/Button/Button"
import Link from 'next/link'
import React from "react";
const NotFoundPage = () => {
  return (
    <div className="grid place-items-center mt-32">
      <h1 className="text-large text-white mb-6">Pagina No Disponible</h1>
      <Link href={`/`}>
        <Button>Volver a Home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
