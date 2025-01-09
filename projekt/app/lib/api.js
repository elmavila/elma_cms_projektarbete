export async function getPageDataFromContentful() {
    const query = `query {
    projectCollection {
      items {
        title
        description
        slug
      }
     }`;


    const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/8vn73cp47ezr`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer C5hlqTdn6WC7Qt3pa9XdsD3DJlvSXh2AE-6CqnF74Ro`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query}),
  }
  ).then((response) => response.json())


  return response?.data.projectCollection.items[0] ?? null;
}
