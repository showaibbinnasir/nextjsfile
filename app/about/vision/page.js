import getAllPost from '@/app/lib/getAllPost/getAllPost'
import Link from 'next/link'


export default async function Vision() {
  // const boss = await getAllPost()

  return (
    <div>
      {/* <div className='flex justify-center mt-10'>
        <h1 className="text-3xl font-semibold">this is vision page</h1>

      </div>
      <div className='flex justify-center mt-10'>
        {
          boss &&
            <div className='text-2xl'>
              {
                boss.map((post, i) => <div key={i}>
                  <Link href={`vision/${post._id}`}><h1> {i + 1} | {post.title}</h1></Link>
                </div>)
              }
            </div>
        }
      </div> */}
      <div>
        hello
      </div>
    </div>
  )
}
