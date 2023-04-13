import axios from "axios";

var catalog = [
    {
        "title":"milk",
        "category":"diary",
        "price":8.99,
        "image":"milk.jpeg",
        "_id":"1000",
    },
    {
        "title":"eggs",
        "category":"diary",
        "price":3.99,
        "image":"eggs.jpeg",
        "_id":"1001",
    },
    {
        "title":"carrots",
        "category":"shopping",
        "price":5.99,
        "image":"carrots.jpg",
        "_id":"1002",
    },
    {
        "title":"coffee",
        "category":"dairy",
        "price":3.99,
        "image":"coffee.jpg",
        "_id":"1003",
    },
    {
        "title":"cereal",
        "category":"dairy",
        "price":3.99,
        "image":"cereal.jpg",
        "_id":"1004",
    },
    {
        "title":"cheese",
        "category":"dairy",
        "price":1.99,
        "image":"cheese.webp",
        "_id":"1005",
    },
    {
        "title":"apples",
        "category":"shopping",
        "price":4.99,
        "image":'apples.jpg',
        "_id":"1006",
    },
];

class DataService {
    async getProducts(){
        //if you need to start the frontend without the backend uncomment the line below
        //return catalog;    

        let response  = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/catalog",product);
        return response.data;
    }
}

export default DataService;