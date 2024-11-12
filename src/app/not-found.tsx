import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <AlertCircle
          className="mx-auto h-16 w-16 text-red-500 mb-4"
          aria-hidden="true"
        />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          404 - Página no encontrada
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          La página que estás buscando no existe.
        </p>
        <Button asChild>
          <Link href="/" className="inline-flex items-center">
            Volver a la página principal
          </Link>
        </Button>
      </div>
    </div>
  )
}
