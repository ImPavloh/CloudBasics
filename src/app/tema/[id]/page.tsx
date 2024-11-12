import { notFound } from 'next/navigation'
import { topics } from '@/components/topics/data'
import Explorador from '@/components/explorador'

interface TopicPageProps {
  params: {
    id: string
  }
}

export default function TopicPage({ params }: TopicPageProps) {
  const topic = topics.find((t) => t.id === params.id)

  if (!topic) {
    notFound()
  }

  return <Explorador initialTopicId={params.id} />
}

export async function generateStaticParams() {
  return topics.map((topic) => ({
    id: topic.id,
  }))
}
