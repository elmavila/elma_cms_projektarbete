import { getSingleProject, getAllProjects } from '../../lib/api'
import Image from 'next/image'

export async function generateStaticParams() {
  const project = await getAllProjects()
  return project.map((project) => ({
    slug: project.slug,
  }))
}

export default async function singleProject({ params }) {
  const allProjects = await getSingleProject(params.slug)
  console.log('alla', allProjects[0])

  if (!allProjects || allProjects.length === 0) {
    return <div>Inget projekt hittades.</div>
  }

  const project = allProjects[0]

  return (
    <main>
      <h1>{project.projectTitle}</h1>

      {project.multiImgCollection?.items?.map((img, index) => (
        <Image key={index} src={img.url} width={500} height={500} alt={img.description}></Image>
      ))}
      {project.mainText?.json?.content?.map((text, index) => (
        <div key={index}>{text.content[0].value}</div>
      ))}
    </main>
  )
}
