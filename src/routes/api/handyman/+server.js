import { json } from "@sveltejs/kit";
import { getCollection } from "../db";




export async function GET() {

    try {

        // init mongodb collection
        const collection = await getCollection("handyman")
        const services = await collection.find().toArray();

        
        return json([
            ... services            
        ])
    }catch(e) {
        return json({
            message : "Error occured",
            error : e
        })
    }
}


export async function POST({request}) {

    const data = await request.json();
    try {

        // init mongodb collection
        const collection = await getCollection("handyman")
        const res = await collection.insertOne(data);

        
        return json([
            res,
            data
        ])
    }catch(e) {
        return json({
            message : "Error occured",
            error : e
        })
    }
}