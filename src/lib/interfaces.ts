export interface SimplifiedProduct {
    _id: string,
    name: string,
    price: number,
    "slug": string,
    "category": string,
    "imgUrl": string,
    "sale":string,
    "saleStatus":boolean,
    description:string,
     images:{
        _type:string,
        _key:string,
        asset:{
            _ref:string,
            _type:string
        }
     }[],
    price_id?:string

}

export interface CartProduct {
    name:string,
    price:number,
    description:string,
    image:string,
    id:string,
    currency:string,
    slug:string,
    category:string,
    price_id?:string

}