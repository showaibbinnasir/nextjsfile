import getPostDetails from '@/app/lib/getPostDetails/getPostDetails';

export default async function BlogPost({ params }) {
    const { id } = await params
    const post = await getPostDetails(id)
    return (
        <div>
            <div>
                {post._id}
            </div>
            <div>
                {post.name}
            </div><div>
                {post.title}
            </div><div>
                {post.description}
            </div>
        </div>
    )
}
