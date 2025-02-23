export default async function getPostDetails(id) {
    const baseURL = process.env.API_URL 
    const url = await fetch(`${baseURL}/api/getSinglePost/${id}`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }