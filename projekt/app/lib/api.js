require('dotenv').config()
// Laddar miljövariabler från en `.env`-fil för att hantera känslig information som API-nycklar.

const FRONT_HEAD_FIELDS = `
  title
  description
  imageFrontPage {
    title
    description
    contentType
    fileName
    size
    url
    width
    height
  }
`
const FRONT_ABOUT_FIELDS = `
  aboutMeTitle
  aboutMeDescription
`

const FRONT_PROJECTS_FIELDS = `
projectTitle
      projectImg {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      projectDescription1
      projectImg2 {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      projectDescription2
`

const ALL_PROJECTS = `
  projectPhoto {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      projectTitle
      projectDescription
      mainText{
      json
      }
      slug
      multiImgCollection{
        items{
          title
          description
          url
          width
          height
        }
      }
      categoryCollection{
        items{
          title
          slug
        }
      }
      url
`
const CATEGORY_FIELDS = `
  title
  slug
`
const FILTERD_PROJECTS = `
      title
      slug
      linkedFrom{
        allProjectsCollection(limit: 10){items{projectPhoto {
        title
        description
        contentType
        fileName
        size
        url
        width
        height
      }
      projectTitle
      projectDescription
      mainText{
      json
      }
      slug
      multiImgCollection{
        items{
          title
          description
          url
          width
          height
        }
      }
      categoryCollection(limit: 10){
        items{
          title
          slug
        }
      }
      url}}
      }
`

const ABOUT_PRESENTATION = `
  title
  description
`

const ABOUT_EDU = `
  title
  eduList
`
const ABOUT_WORK = `
  title
  works
`
const CONTACT_HEAD = `
  title
  img
  {
    url
    description
    }
`
const CONTACT_INFO = `
  title
  contactInformation
`
export async function getPageDataFromFrontPageHead() {
  const query = await fetchGrafQL(`
    query {
      frontPageHeadCollection {
        items {
          ${FRONT_HEAD_FIELDS}
        }
      }
    }
  `)
  return query?.data?.frontPageHeadCollection?.items || {}
}
export async function getPageDataFromFrontAbout() {
  const query = await fetchGrafQL(`
    query {
      frontPageAboutMeCollection {
        items {
          ${FRONT_ABOUT_FIELDS}
        }
      }
    }
  `)
  return query?.data?.frontPageAboutMeCollection?.items || {}
}

export async function getPageDataFromFrontProjects() {
  const query = await fetchGrafQL(`
    query {
      frontPageProjectsCollection {
        items {
          ${FRONT_PROJECTS_FIELDS}
        }
      }
    }
  `)
  return query?.data?.frontPageProjectsCollection?.items || {}
}

export async function getAllProjects() {
  const query = await fetchGrafQL(`
    query {
      allProjectsCollection (where: {slug_exists: true}) {
        items {
          ${ALL_PROJECTS}
        }
      }
    }
  `)
  return query?.data?.allProjectsCollection?.items || {}
}

export async function getAboutPresentation() {
  const query = await fetchGrafQL(`
    query {
      aboutMePresentationCollection {
        items {
          ${ABOUT_PRESENTATION}
        }
      }
    }
  `)
  return query?.data?.aboutMePresentationCollection?.items || {}
}
export async function getAboutEdu() {
  const query = await fetchGrafQL(`
    query {
      aboutMeEduCollection {
        items {
          ${ABOUT_EDU}
        }
      }
    }
  `)
  return query?.data?.aboutMeEduCollection?.items || {}
}
export async function getAboutWork() {
  const query = await fetchGrafQL(`
    query {
      aboutMeWorkCollection {
        items {
          ${ABOUT_WORK}
        }
      }
    }
  `)
  return query?.data?.aboutMeWorkCollection?.items || {}
}

export async function getContactHead() {
  const query = await fetchGrafQL(`
    query {
      contactHeadCollection {
        items {
          ${CONTACT_HEAD}
        }
      }
    }
  `)
  return query?.data?.contactHeadCollection?.items || {}
}
export async function getContactInfo() {
  const query = await fetchGrafQL(`
    query {
      contactInformationCollection {
        items {
          ${CONTACT_INFO}
        }
      }
    }
  `)
  return query?.data?.contactInformationCollection?.items || {}
}

export async function getSingleProject(slug) {
  const query = await fetchGrafQL(`
    query {
      allProjectsCollection(where: {slug: "${slug}"}, limit: 1) {
        items {
          ${ALL_PROJECTS}
        }
      }
    }
  `)
  return query?.data?.allProjectsCollection?.items || {}
}

export async function getCategory() {
  const query = await fetchGrafQL(`
    query {
      categoryCollection {
        items {
          ${CATEGORY_FIELDS}
        }
      }
    }
  `)
  return query?.data?.categoryCollection?.items || {}
}
export async function getFilterdProjects(slug, limit = 10) {
  const filterdQuery = await fetchGrafQL(`
    query {
      categoryCollection(where: {slug: "${slug}"}, limit: ${limit}) {
        items {
          ${FILTERD_PROJECTS}
        }
      }
    }
  `)
  return filterdQuery
}
async function fetchGrafQL(query) {
  const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  const data = await response.json()
  console.log('GraphQL Response:', data) // Logga hela svaret här för att inspektera det

  return data
}
