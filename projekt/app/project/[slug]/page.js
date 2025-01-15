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
    return { notFound: true };
  }

  const project = allProjects[0]

  return (
    <main>
      <h1>{project.projectTitle}</h1>
      <div>Kategori: {project.categoryCollection?.items?.map((category) => category.title).join(', ')}</div>
      {project.mainText?.json?.content?.map((text, index) => (
        <div key={index}>{text.content[0].value}</div>
      ))}
      {project.multiImgCollection?.items?.map((img, index) => (
        <Image key={index} src={img.url} width={500} height={500} alt={img.description}></Image>
      ))}
    </main>
  )
}
