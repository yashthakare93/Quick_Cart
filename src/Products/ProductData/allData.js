const allData = [
    {
        id: 1,
        imgs: [
            "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
        ],
        title: "Nike Air Monarch IV",
        reviews: "123",
        prevPrice: "2,999",
        newPrice: "2,129",
        company: "Nike",
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.3',
        discount: '-29%',
        availableSizes: ["6", "7", "8", "9"],
        colors: ["white", "black", "blue"],
        imagesByColor: {
            white: [
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
            ],
            black: [
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg", // Replace with actual black shoe image URLs
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
            ],
            blue: [
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg", // Replace with actual blue shoe image URLs
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
                "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
            ]
        }
    },
    {
        id: 2,
        imgs: [
            "https://m.media-amazon.com/images/I/51E-Nys50YL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/61h7VX6RbyL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41rRR7Y1mwL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41DO2xLGywL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/617WIgjo4YL._SY695_.jpg"
        ],
        title: "Mens Air Max Systm Running Shoe",
        reviews: "237",
        prevPrice: "8,595",
        newPrice: "5,984",
        company: "Nike",
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.3',
        discount: '-30%',
        availableSizes: ["6", "7", "8"],
        colors: ["white", "black", "blue"],
        imagesByColor: {
            white: [
                "https://m.media-amazon.com/images/I/51E-Nys50YL._SY695_.jpg", // Replace with actual white shoe image URLs
                "https://m.media-amazon.com/images/I/61h7VX6RbyL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41rRR7Y1mwL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41DO2xLGywL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/617WIgjo4YL._SY695_.jpg"
            ],
            black: [
                "https://m.media-amazon.com/images/I/51E-Nys50YL._SY695_.jpg", // Replace with actual black shoe image URLs
                "https://m.media-amazon.com/images/I/61h7VX6RbyL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41rRR7Y1mwL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41DO2xLGywL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/617WIgjo4YL._SY695_.jpg"
            ],
            blue: [
                "https://m.media-amazon.com/images/I/51E-Nys50YL._SY695_.jpg", // Replace with actual blue shoe image URLs
                "https://m.media-amazon.com/images/I/61h7VX6RbyL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41rRR7Y1mwL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/41DO2xLGywL._SY695_.jpg",
                "https://m.media-amazon.com/images/I/617WIgjo4YL._SY695_.jpg"
            ]
        }
    },
    {
        id: 3,
        imgs: [
            "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
        ],
        title: "Nike Air Vapormax Plus",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Nike",
        color: "red",
        subcategory: "sneakers",
        category: "footwears",
        rating: '5.0',
        discount: '-29%'
    },
    {
        id: 4,
        imgs: [
            "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg"
        ],
        title: "Nike Waffle One Sneaker",
        reviews: "123",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Nike",
        color: "green",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.0',
        discount: '-29%'
    },
    {
        id: 5,
        imgs: [
            "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        ],
        title: "Nike Running Shoe",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Adidas",
        color: "black",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        id: 6,
        imgs: [
            "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        ],
        title: "Flat Slip On Pumps",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Vans",
        color: "green",
        subcategory: "flats",
        category: "footwears",
    },
    {
        id: 7,
        imgs: [
            "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
        ],
        title: "Knit Ballet Flat",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "3,200", // Assuming 50 in dollars converted to INR
        company: "Adidas",
        color: "black",
        subcategory: "flats",
        category: "footwears",
    },
    {
        id: 8,
        imgs: [
            "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
        ],
        title: "Loafer Flats",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "3,200", // Assuming 50 in dollars converted to INR
        company: "Vans",
        color: "white",
        subcategory: "flats",
        category: "footwears",
    },
    {
        id: 9,
        imgs: [
            "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
        ],
        title: "Nike Zoom Freak",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Nike",
        color: "green",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        id: 10,
        imgs: [
            "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        ],
        title: "Nike Men's Sneaker",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "13,000", // Assuming 200 in dollars converted to INR
        company: "Adidas",
        color: "blue",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        id: 11,
        imgs: [
            "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        ],
        title: "PUMA Grey Mens Hybrid Fuego Sports Shoes",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "8,550", // Assuming 150 in dollars converted to INR
        company: "Puma",
        color: "grey",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        id: 12,
        imgs: [
            "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        ],
        title: "Pacer Future Sneaker",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "8,550", // Assuming 150 in dollars converted to INR
        company: "Puma",
        color: "red",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        id: 13,
        imgs: [
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXFxUVFxUVFh0XFxcXFRUXFxUVFxgYHSggGBolHRUVITEhJSorLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH...7U7eGJwIPr1IoCqXLe11BqtysX9kMjJgD0d7ZGc5z+FaDJx20F5sNfK7k1qYqsluLUzM0kZDZI9yTnAB6jmn9e2ffDU5daLSFk92CR6k9PXPNADbXLXOmOtw2V0z2YnIIBBIB3HoD9zUMs4Ku2Bccqs5XlkuwPFxq+Jp8kdRYyEcr1P1uTWYLL9KwAYGB3J7ZIwPTnPbNQMF4i8E/iZfWUHbR37kd5b3j8Kx9oxpJ93gPr9CgVUVJDE8h//2Q=="
        ],
        title: "Mens Loafer",
        reviews: "123 ",
        prevPrice: "9,199", // Assuming 140.00 in dollars converted to INR
        newPrice: "8,550", // Assuming 150 in dollars converted to INR
        company: "HRX by Hrithik Roshan",
        color: "green",
        subcategory: "footwears",
        category: "loafers",
        rating: '4.0',  // Example rating
        discount: '-29%'  // Example discount
    },
    {
        id: 14,
        imgs: [
            "https://m.media-amazon.com/images/I/61SsXi7ofNL._AC_UY500_.jpg",
            "https://m.media-amazon.com/images/I/61HcG1CX3nL._AC_UY500_.jpg",
            "https://m.media-amazon.com/images/I/71v42+99YhL._AC_UY500_.jpg",
            "https://m.media-amazon.com/images/I/61DqNl9BGJL._AC_UY500_.jpg"
        ],
        title: "Samsung Galaxy S21 Ultra",
        reviews: "1050 ",
        prevPrice: "119999",
        newPrice: "99999",
        company: "Samsung",
        color: "Phantom Black",
        subcategory: "Smartphones",
        category: "Electronics",
        rating: '4.6',
        discount: '17%'
    },
    {
        id: 15,
        imgs: [
            "https://m.media-amazon.com/images/I/71MKH8jRD0L._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/81hS40yy2aL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/71bj-GjeLCL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/71fXzYWhRYL._AC_UL320_.jpg"
        ],
        title: "Philips 50 Inch 4K Ultra HD Smart TV",
        reviews: "780 ",
        prevPrice: "59999",
        newPrice: "49999",
        company: "Philips",
        color: "Black",
        subcategory: "Televisions",
        category: "Electronics",
        rating: '4.5',
        discount: '17%'
    },
    {
        id: 16,
        imgs: [
            "https://m.media-amazon.com/images/I/61zu1p2cznL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/41JujtT2PwL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/61PnNflSowL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/71RSkTQ8CdL._AC_UL320_.jpg"
        ],
        title: "Prestige 5-Litre Popular Aluminium Pressure Cooker",
        reviews: "3200 ",
        prevPrice: "1795",
        newPrice: "1299",
        company: "Prestige",
        color: "Silver",
        subcategory: "Pressure Cookers",
        category: "Home",
        rating: '4.3',
        discount: '28%'
    },
    {
        id: 17,
        imgs: [
            "https://m.media-amazon.com/images/I/71+GdJutgkL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/61qYJKw4nDL._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/81kAlZS7N7L._AC_UL320_.jpg",
            "https://m.media-amazon.com/images/I/71CLWnBy5wL._AC_UL320_.jpg"
        ],
        title: "Levi's Men's 512 Slim Taper Fit Jeans",
        reviews: "1523 ",
        prevPrice: "2999",
        newPrice: "2149",
        company: "Levi's",
        color: "Dark Blue",
        subcategory: "Jeans",
        category: "Fashion",
        rating: '4.4',
        discount: '28%'
    },
    {
    id: 18,
    imgs: [
        "https://m.media-amazon.com/images/I/51wYQoDfnrL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51P28MZmeOL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/41AlBS-jJvL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/516t4EfDemL._SY695_.jpg"
    ],
    title: "Nike Mens Court Legacy Nn Sneaker",
    reviews: "299 ",
    prevPrice: "5,659",
    newPrice: "4,619",
    company: "Nike",
    color: "white",
    subcategory: "sneakers",
    category: "footwears",
    rating: '4.1',
    discount: '19%',
    availableSizes: ["6", "7", "8", "10"],
    colors: ["white", "black"],
    imagesByColor: {
        white: [
            "https://m.media-amazon.com/images/I/51wYQoDfnrL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/51P28MZmeOL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41AlBS-jJvL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41VbCBrNbuL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/516t4EfDemL._SY695_.jpg"
        ],
        black: [
            "https://m.media-amazon.com/images/I/619BuJ70k0L._SX695_.jpg",
            "https://m.media-amazon.com/images/I/61G-fPcArpL._SX695_.jpg",
            "https://m.media-amazon.com/images/I/61DabMr+1IL._SX695_.jpg",
            "https://m.media-amazon.com/images/I/61Vcy+XRYGL._SX695_.jpg",
            "https://m.media-amazon.com/images/I/61OgWrz62WL._SX695_.jpg",
            "https://m.media-amazon.com/images/I/61d1iB4BhfL._SX695_.jpg"
        ]
    }
}
];


export default allData;
