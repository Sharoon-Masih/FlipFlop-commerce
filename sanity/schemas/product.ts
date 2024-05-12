//now simply we have created this schema  which is anonymous(which means it has no name) and remember we can only create scheme like this and as it is anonymous that's why we have to export default so that we can import it by anyname.

export default {
    name: "product",   //this is basically the name of document which we creating, Now this "name"property is not display on UI but it is very important because this "name" property is stored in database of sanity as "name of document" which is "product" right now and later on by help of this "name" property we can make query and access data from database.
    type: "document", //"Document" is core type of content in sanity, it means that the content can be a single blog post, product or event. Then further we can create fields of different types in it. we can assume it like document is a wedding card in which we have further field of different types like name of groom/bride, venue, contact etc.. 
    title: "Product", //this is the title of Document which is going to display on UI.
    fields: [ //now comes to fields which is must when creating document, in simple words these are the fields which we will in our wedding card, But here we are working with "Product" so we will talk about product only.
        { //this is first field.
            name: "name", //this proprty set the "name" of field in backend
            type: "string", //this is the type of field
            title: "Name of Product" //this the title of field
        },
        {
            name: "images",
            type: "array", //this means the field is of type array.
            title: "Product Images",
            of: [{ type: "image" }] //as above in "type" property we set type to array but which type of array? so for that we use "of" which is of type of array and contain an object of "type" property which is "image" right now.
        },
        {
            name: "slug",
            type: "slug", //this type is basically for generating product automatically by using "slug" but for using generating feature it is must to add "option" property and provide "source" in it.
            title: "Product Slug",
            options: {
                source: "name" //here we set that source by which it generate, here it is generating A/c to "name".
            }
        },
        {
            name: "description",
            type: "array", //normally for descript box we can use "text" type also but we want a box with some feature so for that we have to set type as "array of Block" 
            title: "Product Description",
            of: [{ type: "block" }] //here we defining a type which is "block"
        },
        {
            name: "price",
            type: "number",
            title: "Product Price",
        },
        { //we made this field to link "category" contents with "Product", its benefit is that when we create Product document so at there you we can select the category of that product without moving to any other content  
            name: "category",
            type: "reference", //whenever we want to refrence(link) with our contents we simply set type to "reference". 
            title: "Categories",
            to: [{ //In this property we define that to which "content" we want to referenced this type, like here we set "category" so its mean that link this field with "category" schema.
                type: "category"
            }]
        }
    ]
} 