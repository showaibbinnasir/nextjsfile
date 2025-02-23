export default async function getAllPost() {
    const baseURL = process.env.API_URL 
    const url = await fetch(`${baseURL}/api/getReviews`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }