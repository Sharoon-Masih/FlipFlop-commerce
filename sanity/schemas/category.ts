//now here we are creating another schema for category document, so that we will refrenced with our "Product" schema so that what product we store in database using product schema we can define its "category" there as well using "Category" schema.

import { title } from "process";

export default {
    name:"category",
    type:"document",
    title:"Category",
    fields:[
    {
        name:"name",
        type:"string",
        title:"Category Name"
    }]
}