import client from "@/app/lib/databaseConnect";

export async function GET() {
    const blogs = client.db('showaibsportfolio').collection('blogs')
    const query = {}
    const result = await blogs.find(query).sort({ _id: -1 }).toArray()
    return Response.json(result)
}