export default async function getAllPost() {
    const url = await fetch(`http://localhost:3000/api/getReviews`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }