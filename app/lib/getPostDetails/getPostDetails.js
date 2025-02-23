export default async function getPostDetails(id) {
    const url = await fetch(`https://testdriveapi.neltify.app/api/getSinglePost/${id}`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }