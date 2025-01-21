
export interface Product {
    id: number;
    productName: string;
    _type: "product";
    image? : {
        asset:{
            _ref:string;
            _type: "image";
        }
    };
    price: number;
    description?: string;
}