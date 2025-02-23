export default async function getAllPost() {
    const url = await fetch(`https://testdriveapi.neltify.app/api/getReviews`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }