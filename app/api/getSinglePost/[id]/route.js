import client from "@/app/lib/databaseConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const blogs = client.db('showaibsportfolio').collection('blogs')
    const { id } = params
    const query = { _id: new ObjectId(id) }
    const result = await blogs.findOne(query);
    return Response.json(result)
}