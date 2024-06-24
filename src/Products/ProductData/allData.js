import { AiFillStar } from 'react-icons/ai';

const allData = [
    {
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        title: "Nike Air Monarch IV",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
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
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        star: (
            <div className='flex'>
                < AiFillStar AiFillStar style={{ color: '#FFD700' }} />
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
        color: "red",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        title: "Nike Waffle One Sneaker",
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
        title: "PUMA BLACK-OCE",
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
        color: "green",
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
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71oEkRc9D5L._AC_UX575_.jpg",
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
        color: "black",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/81OwQqzDPVL._AC_UX575_.jpg",
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
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71i2jH9FogL._AC_UX575_.jpg",
        title: "Adidas Originals",
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
        color: "red",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/81-9QZ8o4ZL._AC_UX575_.jpg",
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
        company: "Adidas",
        color: "white",
        subcategory: "sneakers",
        category: "footwears",
    },
    {
        img: "https://m.media-amazon.com/images/I/71DD3s+2YtL._AC_UX575_.jpg",
        title: "Womens Sneakers",
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
        color: "black",
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
