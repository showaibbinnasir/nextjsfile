import Link from 'next/link'
import React from 'react'

const blogs = [
    {
        id : 1,
        title : "Life of Delwar",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam aliquid nam. Inventore dolorem cumque esse facilis magni aut enim! Sequi magnam, vitae repellendus laborum dolore ipsam quam ex doloribus harum inventore debitis! Enim error, consequatur cumque, ipsa repellendus mollitia est ratione tenetur similique ipsum culpa illo numquam soluta rem reiciendis debitis doloremque facere? Molestias magni eos omnis a, doloribus facilis! Fuga illum maxime inventore cupiditate esse dolorum nesciunt adipisci debitis veniam atque alias soluta incidunt doloribus quia dolore assumenda tenetur cumque dolores deleniti, dignissimos quaerat, iusto saepe praesentium. Consectetur voluptate quasi ipsa voluptatum atque dignissimos minima hic, quis est."

    },
    {
        id : 2,
        title : "Life of Samad",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam aliquid nam. Inventore dolorem cumque esse facilis magni aut enim! Sequi magnam, vitae repellendus laborum dolore ipsam quam ex doloribus harum inventore debitis! Enim error, consequatur cumque, ipsa repellendus mollitia est ratione tenetur similique ipsum culpa illo numquam soluta rem reiciendis debitis doloremque facere? Molestias magni eos omnis a, doloribus facilis! Fuga illum maxime inventore cupiditate esse dolorum nesciunt adipisci debitis veniam atque alias soluta incidunt doloribus quia dolore assumenda tenetur cumque dolores deleniti, dignissimos quaerat, iusto saepe praesentium. Consectetur voluptate quasi ipsa voluptatum atque dignissimos minima hic, quis est."

    },
    {
        id : 3,
        title : "Life of Pranta",
        des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam aliquid nam. Inventore dolorem cumque esse facilis magni aut enim! Sequi magnam, vitae repellendus laborum dolore ipsam quam ex doloribus harum inventore debitis! Enim error, consequatur cumque, ipsa repellendus mollitia est ratione tenetur similique ipsum culpa illo numquam soluta rem reiciendis debitis doloremque facere? Molestias magni eos omnis a, doloribus facilis! Fuga illum maxime inventore cupiditate esse dolorum nesciunt adipisci debitis veniam atque alias soluta incidunt doloribus quia dolore assumenda tenetur cumque dolores deleniti, dignissimos quaerat, iusto saepe praesentium. Consectetur voluptate quasi ipsa voluptatum atque dignissimos minima hic, quis est."

    }
]



export default function Blog() {
  return (
    <div className='mt-10'>
        <h1 className="flex justify-center text-3xl font-semibold">All blogs</h1>
        <div>
            {
                blogs.map((blog,i) => <div key={i}>
                     <Link href={`blog/${blog.id}`}><h1 className='flex flex-col my-2 text-lg font-semibold'>{blog.title}</h1></Link>
                </div>)
            }
        </div>
    </div>
  )
}

