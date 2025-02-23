export default async function getPostDetails(id) {
    const url = await fetch(`http://localhost:3000/api/getSinglePost/${id}`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }