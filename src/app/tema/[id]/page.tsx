import { notFound } from 'next/navigation'
import { topics } from '@/components/topics/data'
import Explorador from '@/components/explorador'

interface TemaProps {
  params: Promise<{ id: string }>
}

export default async function Tema({ params }: TemaProps) {
  const { id } = await params
  const topic = topics.find((t) => t.id === id)

  if (!topic) {
    notFound() // tal vez crear un page nuevo para informar que aún no está disponible
  }

  return <Explorador initialTopicId={id} />
}

export async function generateStaticParams() {
  return topics.map((topic) => ({
    id: topic.id,
  }))
}
