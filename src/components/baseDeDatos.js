export const PRODUCTS =[
    {id: 1,
     name: "Brahma",
     description:"Lata de brahma 477cc",
     price:150,
     stock: 7,
     img: "https://www.selectmarket.com.ar/images/productos-600-600/img-0000001218-202010171026-8551.jpg"},
    {id: 2,
     name: "Quilmes",
     description:"Lata de Quilmes 477cc",
     price:160,
     stock: 5,
     img: "https://th.bing.com/th/id/OIP.bIgTsbB0F5-lpSrnhq0EhgHaIh?pid=ImgDet&rs=1"},
    {id: 3,
     name: "Warsteiner",
     description:"Botella de Warsteiner 1lts",
     price:210,
     stock: 3,
     img: "https://th.bing.com/th/id/R.313254128f52f0d1969e7fee629c96da?rik=I1x5PawR4nNnrA&riu=http%3a%2f%2fst1.sedovin.com%2f1460-large_default%2fwarsteiner-botella-330-ml.jpg&ehk=eZMIgo4INiliHIAG%2bEMaXBeDJ0417ILRN%2b9KYd3XCCQ%3d&risl=&pid=ImgRaw&r=0"},
];
export function getProductos(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> resolve(PRODUCTS), 3000);
    })
}