

export interface Product {
    id: number;
    name: string;
    details: string;
    price: number;
    image: string;
}

export const Products: Product[] = [
    {
        id: 1,
        name: 'Free Ticket',
        details: "Free ticket for anyone to make a valuable contribution towards our future online events programme. Thank you.",
        price: 0.00,
        image: "",
    },
    {
        id: 2,
        name: 'Alumni VIP Ticket',
        details: "This livestream will broadcast via a private YouTube link that will be sent to ticket purchasers an hour prior to showtime",
        price: 3500.00,
        image: "",
    },
    {
        id: 3,
        name: 'Book: Good Strategy - Bad Strategy',
        details: "Learn from the experts of business process management",
        price: 17.99,
        image: "https://res.cloudinary.com/dkhiieq9p/image/upload/v1624462142/Screen_Shot_2021-06-23_at_10.58.05_AM_bshihh.png",
    }
]

export class cartProductList {
    constructor(
        product = Products,
        quantity = 0,
        price = 0
    )
    {}
}