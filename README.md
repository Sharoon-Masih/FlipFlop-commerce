
# Scommerce (later on it is named as FlipFlop)

## Tech Stack:
* NextJs
* Tailwind css
* Sanity
* Stripe
* Shadcn

# Let Start:
### Lesson 1
* After installing NextJs and Shadcn paste the command below:

npm i stripe use-shopping-cart next-sanity @stripe/stripe-js @sanity/image-url --force

* stripe (install Stripe package)
* use-shopping-cart (it will make shopping cart process easier and it is already connected with stripe, So it makes the cart process easier)
* next-sanity (install Sanity)
* @stripe/stripe-js (this is client version of stripe)
* @sanity/image-url (this will provide images from sanity)

### create new Sanity project by using command below:
```
npm create sanity@latest -- --template clean --create-project "Day one with Sanity" --dataset production --typescript --output-path day-one-with-sanity
```

This command creates a new project and dataset, and sets up a new project folder with all the files and dependencies you need to get started.

A dataset is a collection of content within a project that's hosted in the Sanity Content Lake.

A project can have many datasets and is also where you'd configure other project-level settings like members, webhooks, and API tokens.

"Scommerce" - this is project name you can change it.

* After this you will see that Sanity is installed successfully 
* one more interesting thing is that your sanity project is created within your nextJs so now we can easily control the sanity studio/dashbboard within our application and this become possible bcuz NextJs and Sanity both is created on top of react so NextJs understand the sanity application. 
* under the hood sanity uses vite which is also on the top of React, therefore it is possible to embbed any react application with Sanity.

**Check this link: [learn basics of Sanity](https://www.sanity.io/learn/course/day-one-with-sanity-studio)**

### Lesson 2
With the Studio files and dependencies installed in the last lesson, you are now ready to start the local development server for Sanity Studio. It allows you to open the Studio in a browser and instantly see the changes reflected when you update its configuration and when you customize it later in this course.

From the command line and inside the folder where your Studio was installed, start the development server by running this command:
```
npm run dev
```
### Log in to the Studio
Open the Studio running locally in your preferred browser on http://localhost:3333.

You should now see a screen like the one below prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used to access sanity.io/manage when you authenticated with the CLI.

### Studio configuration
Once logged in, you'll see a screen saying your Studio does not yet have any document types registered to its schema.

Why is it empty? The central point of all your Studio's configuration takes place in the file sanity.config.ts, including declaring all your schema types.

Take a look at your configuration file. It exports a helper function defineConfig by default and contains a single workspace.
```
// ...all other imports
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  // ...all other config
  schema: {
    types: schemaTypes,
  },
})
```
In this file, you can see the schema types for this config are imported from another file ./schemaTypes/index.ts, which currently contains an empty array.
```
export const schemaTypes = []
```
So when you create new schema types, they must be added to this array, which is then loaded into the Studio configuration.

let's do that!

### Lesson 3 (Creating a schema)

### What is schema in general?

Imagine a schema like a blueprint for your house. It outlines the different rooms (types of content) and what goes in each room (fields).

**In general, there are two main types of schemas:**

* **Mental Schemas:** These are how our brains organize information. Like a filing cabinet in your head, schemas help us understand the world around us.
* **Computer Schemas (like in Sanity):** These define how data is structured in a database.  Think of it as a digital blueprint for your website's content.

**Why create a schema in Sanity?**

* **Organization:**  A schema keeps your content tidy and consistent. Everyone adding content knows what information goes where.
* **Easy Editing:**  Sanity uses the schema to build a user-friendly interface for editing content.  Imagine pre-built forms for each type of content.
* **Flexibility:**  You can create different types of content (like blog posts, products, or events) and define the specific information needed for each.

**Creating a Schema in Sanity:**

Sanity uses plain English (or a similar language) to define your schema.  Here's a simplified breakdown:

1. **Content Types:**  These are the different categories of information you'll have, like "Blog Post" or "Product."
2. **Fields:**  These are the specific pieces of information within a content type, like "Title," "Author," or "Price."

Sanity then uses this schema to create a content management system (CMS) specifically designed for your website's needs.  Adding content becomes like filling out forms, ensuring everything stays organized and easy to manage.

* Step 1: go inside your Sanity folder.
* Step 2: now create schema folder there.
* Step 3: now create file with your schemaName there inside the scheme folder.
* Step 4: now create a scheme inside that file and must do it export default.
```
export default  { 
    name:"product",   //this is basically the name of document which we creating, Now this "name"property is not display on UI but it is very important because this "name" property is stored in database of sanity as "name of document" which is "product" right now and later on by help of this "name" property we can make query and access data from database.
    type:"document", //"Document" is core type of content in sanity, it means that the content can be a single blog post, product or event. Then further we can create fields of different types in it. we can assume it like document is a wedding card in which we have further field of different types like name of groom/bride, venue, contact etc.. 
    title:"Product", //this is the title of Document which is going to display on UI.
    fields:[ //now comes to fields which is must when creating document, in simple words these are the fields which we will in our wedding card, But here we are working with "Product" so we will talk about product only.
        { //this is first field.
            name:"name", //this proprty set the "name" of field in backend
            type:"string", //this is the type of field
            title:"Name of Product" //this the title of field
        },
        {
            name:"images", 
            type:"array", //this means the field is of type array.
            title:"Product Images",
            of:[{type:"image"}] //as above in "type" property we set type to array but which type of array? so for that we use "of" which is of type of array and contain an object of "type" property which is "image" right now.
        },
         {
            name:"slug",
            type:"slug", //this type is basically for generating product automatically by using "slug" but for using generating feature it is must to add "option" property and provide "source" in it.
            title:"Product Slug",
            options:{ 
                source:"name" //here we set that source by which it generate, here it is generating A/c to "name".
            }
        },
        {
            name:"description",
            type:"array", //normally for descript box we can use "text" type also but we want a box with some feature so for that we have to set type as "array of Block" 
            title:"Product Description",
            of:[{type:"block"}] //here we defining a type which is "block"
        },
        {
            name:"price",
            type:"number",
            title:"Product Price",
        },
    ]
} 
```
* after creating the schema must import it inside the **schema.ts** file and pass schema to the property **type** of **schema** object like this:
```
import { type SchemaTypeDefinition } from 'sanity'
import product from './schemas/product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
``` 
**Here are some Core Schema Types:**

* **Document:** This is the foundation for your content in Sanity. It represents a single piece of content, like a blog post, product, or event. Documents can have various fields containing different data types.
* **Array:** This type allows you to define lists of other data types within a field. For instance, a product document might have an "images" field that's an array of image references.
* **Reference:** This type enables linking documents to each other within your schema. Imagine a blog post referencing its author (another document).
* **String:** This is for storing text data like titles, descriptions, etc.
* **Number:** This is for storing numerical data like prices, quantities, etc.
* **Boolean:** This is for storing True/False values (e.g., isFeatured).
* **Image:** This is specifically designed for uploading and managing images within your content.
* **Geopoint:** This type is useful for storing and managing geographical locations.
* **URL:** This allows storing and managing web URLs within your data.
* **Date:** This is for storing and managing date information.
* **Object:** This type is used for creating complex structured data within a field. Imagine a product having an "options" object with details like size and color.
* **File:** This type allows storing and managing various file types, not just images.
* **Text:** This is specifically designed for storing rich text content with formatting options.
* **Block:** This type is used for creating flexible, reusable content blocks within documents. Imagine creating a reusable component for a call-to-action section.

For understanding schema and document more clearly:
![](https://cdn.sanity.io/images/4zkcodox/development/f4b176748e23968f4e65bc098b94bbd81471e678-1828x794.png)

* In the above pic, **Article** is the **Schema** and **new article** is the **document**.
* basically schema is like a model for all of documents created under that schema, it explicitly defines this document can take only these fields, it can not accept any other field that's it.
* schema is also known as "data model", "content model".

### For connecting Content with our Frontend
* Step 1: Inside the Sanity you will find **lib** folder and inside that folder you will find **client.ts** and **image.ts** file.
* Step 2 (optional): If you not find the **lib** folder inside sanity so create a new one and also create twi files inside it named as **client.ts** and **image.ts**.
**client.ts**
```
import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

``` 
This is the default client.ts which we got from Sanity, if you dont have so create a new one inside lib folder, here you can see that we are importing environment variable and using them in createClient() function.

Now we can fetch data from Sanity backend on our Client, But here is an issue that Sanity will not return image URL, so for getting image we have to use another file named as **image.ts** which is also inside the lib folder.

**image.ts**
```
import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max').url()
}

```

* now remember if you want to get **client.ts** and **image.ts** and **.env** as well at the time of installing sanity, press y when it ask for Would you like to add configuration files for a Sanity project in this Next.js folder? Yes.

### Grok query language (grok ql)
let suppose we have created a schema of name heroImages where i set two field named as "image1" and "image2", Now i have uploaded the both images in sanity using sanity studio. 
 
Now i have to fetch the images, so for fetching them sanity uses a query language known as Grok.

* Go in studio and click on vision tab.
* always start query using **asterisk(*)**.
* if i put only **(*)** and run query so it will fetch all the data inside sanity.
* but we do not want all data we only want some specific type of document, so like here we only want documents of type **heroImages** check below:
```
*[_type == "heroImages"] //now as it return data in form of array so we put array symbol [] infront of * ,then _type == "documentName", now it will return an array of only heroImages type document.  
```
* Now further, if i want only specific image from heroImages so simply find the index number of the image which you want from the array of heroImages which it returned and then put that index number infront of it, it is bcuz let suppose if you have created 3 document of type heroImages so it return array of 3 element but further if i only want the 2nd index element so i simply put its index number.
```
*[_type == "heroImages"][2] //remember type should be written with underscore like this: _type
```
* Now fetch this data on frontend simply go in your server component and create the function mentioned below:
```
async function getData() {  //here i simply create function in which i'm fetchin data from sanity.
    const query = "*[ _type == 'heroImages' ][0]"; //here i create query.
    const data = await client.fetch(query); //here by using the built-in "fetch" method in client function got by sanity, i have fetched data.
    return data;
}
```
## Now after creating your UI and implementing Stripe API(optional) 

## Deployment 
* Step1: push code to GitHub
* Step2: import repository on vercel
* Step3: must add environment variables to vercel which are stored in your .env file.
* Step4: Click Deploy
 
