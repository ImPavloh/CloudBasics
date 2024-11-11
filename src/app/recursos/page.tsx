import Link from 'next/link'
import { FaBook, FaVideo, FaTools, FaExternalLinkAlt } from 'react-icons/fa'

const resources = [
  {
    title: "AWS Documentation",
    description: "Documentación oficial de Amazon Web Services",
    icon: FaBook,
    link: "https://docs.aws.amazon.com/"
  },
  {
    title: "Google Cloud Platform YouTube",
    description: "Canal oficial de YouTube de Google Cloud Platform",
    icon: FaVideo,
    link: "https://www.youtube.com/user/googlecloudplatform"
  },
  {
    title: "Microsoft Azure Tools",
    description: "Herramientas y utilidades para Microsoft Azure",
    icon: FaTools,
    link: "https://azure.microsoft.com/en-us/downloads/"
  },
  {
    title: "Cloud Computing Courses - Coursera",
    description: "Cursos en línea sobre Cloud Computing",
    icon: FaBook,
    link: "https://www.coursera.org/courses?query=cloud%20computing"
  },
  {
    title: "IBM Cloud Tutorials",
    description: "Tutoriales y guías para IBM Cloud",
    icon: FaVideo,
    link: "https://cloud.ibm.com/docs/tutorials?topic=solution-tutorials-tutorials"
  },
  {
    title: "Cloud Native Computing Foundation",
    description: "Recursos y proyectos de la CNCF",
    icon: FaTools,
    link: "https://www.cncf.io/"
  }
]

export default function ResourcesPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Recursos</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Herramientas y Materiales de Aprendizaje
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            Explora estos valiosos recursos para profundizar tus conocimientos en cloud computing.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white dark:bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <resource.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">{resource.title}</h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      {resource.description}
                    </p>
                    <div className="mt-6">
                      <Link href={resource.link} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                        Explorar
                        <FaExternalLinkAlt className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}