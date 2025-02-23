export default async function getAllPost() {
    const url = await fetch(`https://showaibnextjs.netlify.app/api/getReviews`,

      {
        next : {
          revalidate : 1,
        }
      }
    );
    const data = await url.json()
    return data;
  }