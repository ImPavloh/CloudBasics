import { notFound } from 'next/navigation'
import { topics } from '@/components/topics/data'
import Explorador from '@/components/explorador'

interface TemaProps {
  params: {
    id: string
  }
}

export default function Tema({ params }: TemaProps) {
  const topic = topics.find((t) => t.id === params.id)

  if (!topic) {
    notFound() // tal vez crear un page nuevo para informar que aún no está disponible
  }

  return <Explorador initialTopicId={params.id} />
}

export async function generateStaticParams() {
  return topics.map((topic) => ({
    id: topic.id,
  }))
}
