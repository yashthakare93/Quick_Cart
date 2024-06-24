import { AiFillStar } from 'react-icons/ai';

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
        reviews: "123 reviews",
        prevPrice: "2,999",
        newPrice: "2,129",
        company: "Nike",
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.3',
        discount: '-29%'
    },
    {
        id: 2,
        imgs: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZxJhoD6Syb9ZJRj4cJVHu2yKSPttaMIIWdrfKPgl6TH2Rgsj-TYynYWQHa-il1-1nxo&usqp=CAU",
            "https://m.media-amazon.com/images/I/51E-Nys50YL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/61h7VX6RbyL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41rRR7Y1mwL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/41DO2xLGywL._SY695_.jpg",
            "https://m.media-amazon.com/images/I/617WIgjo4YL._SY695_.jpg"
        ],
        title: "Mens Air Max SystmRunning Shoe",
        reviews: "237 reviews",
        prevPrice: "8,595",
        newPrice: "5,984",
        company: "Nike",
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.3',
        discount: '-30%'
    },
    {
        id: 3,
        imgs: [
            "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg"
        ],
        title: "Nike Air Vapormax Plus",
        reviews: "123 reviews",
        prevPrice: "$140.00",
        newPrice: "200",
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
        reviews: "123 reviews",
        prevPrice: "$140.00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        subcategory: "sneakers",
        category: "footwears",
        rating: '4.0',
        discount: '-29%'
    },
    {
        img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        title: "Nike Running Shoe",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "black",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        title: "Flat Slip On Pumps",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Vans",
        color: "green",
        subcategory: "flats",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
        title: "Knit Ballet Flat",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        subcategory: "flats",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
        title: "Loafer Flats",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Vans",
        color: "white",
        subcategory: "flats",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
        title: "Nike Zoom Freak",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
        title: "Nike Men's Sneaker",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "blue",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
        title: "PUMA Grey Mens Hybrid Fuego Sports Shoes",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "grey",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
        title: "Pacer Future Sneaker",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "red",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "data:image/jpeg;base64,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",
        title: "Women's Wedge Sandal",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "skin",
        subcategory: "sandal",
        category: "footwears",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tkFV8MYUiTKcSyeqPKxRZMxXPHRojeging&s",
        title: "Leather Slide Sandal",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "black",
        subcategory: "sandal",
        category: "footwears",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRop-Z0AFDdvJ0BSGBWVEtKD7h9tAH4R1wYQ&s",
        title: "Mule Sandal",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Puma",
        color: "white",
        subcategory: "sandal",
        category: "footwears",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTL7c4q8pd9Tj3mbKmQOSUH-Ewuo9yZ3VFA&s",
        title: "Digitas CRUCIS Womens Sneakers",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$140,00",
        newPrice: "150",
        company: "Adidas",
        color: "pink",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpuzti6a2yqNPAvfFwNn64mRzQUqE0YIjWuH9c5BfwcodoZY41CQjlwCbNFZHSBZHSjp_VkX8OKKd_V6ng9Vd_zaUu4wYGyR01LxFL__ZP5ckT3TSMrUI9",
        title: "Noise Two Wireless",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$1699",
        newPrice: "200",
        company: "Noise",
        color: "black",
        category: "electronics&accessories",
        subcategory: "Headphones"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSBs2As8pqg3Te-ClggtWNEpDYJ6yKmXhgmdNFP8J5S04Ols6AW4FLA4JGUYcyC6f1E2eTeW_FN8p7NT3B-nVr1Zs7yhZwAVRnr6Q0IHysTJI70ZdpntMU7C3c",
        title: "Sony WH-CH520 Wireless",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$3990",
        newPrice: "200",
        company: "Sony",
        color: "black",
        category: "Electronics & Accessories",
        subcategory: "Headphones"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS3KNqDTIB7TKN_mYdNJ5vbvOvhjZRMy1TUSbWldwszJ0cLvPjlCI6Z5Impf0LGkQk0md9c-WldTiNv5wSDe2NpI6aS65Fesc6LomzGz-NU5cXjAkEmgq-Ebw",
        title: "Boat Rockerz 450",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$1699",
        newPrice: "200",
        company: "Boat",
        color: "black",
        category: "Electronics",
        subcategory: "Headphones"
    },
    {
        img: "https://rukminim2.flixcart.com/image/750/900/k7285u80/headphone/4/3/u/boat-rockerz-370-original-imafpdzhywghfabu.jpeg?q=20&crop=false",
        title: "Boat Rockerz 370",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$1199",
        newPrice: "200",
        company: "Boat",
        color: "black",
        category: "Electronics",
        subcategory: "Headphones"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwXcgujIXh5P6CwyC6jw71LJpyMFschLIaulXj__eOqQMsYPz-6jpdxMMhVFOrJoxH1WsO1Jqu9sy7YsClnz-qv7QEDjA-Oz2K0aH_uDux-u3n-7LgOPOlPg",
        title: "Sennheiser HD 350BT Wireless",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$5990",
        newPrice: "200",
        company: "Sennheiser",
        color: "black",
        category: "Electronics",
        subcategory: "Headphones"
    },
    {
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQAnKo2VQgal4SB_IjHJSUJadg6023wFBG03sCIz3s1ib9yzj_YP-DFqkwKMn_vYrCpOxa_GszCxZk5vhK6os8hnKHo4_NvzcNTjQD_abUR3v-Giu0aeT-y",
        title: "Noise Newly Launched Three Wireless",
        star: (
            <div className="flex">
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
                <AiFillStar style={{ color: '#FFD700' }} />
            </div>
        ),
        reviews: "123 reviews",
        prevPrice: "$1999",
        newPrice: "200",
        company: "Noise",
        color: "black",
        category: "Electronics",
        subcategory: "Headphones"
    }
];

export default allData;
