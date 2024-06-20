import React,{useContext} from 'react'
import { HeadphoneDealsContext } from '../../context/HeadphoneContext';

const Discount = () => {
    const headphoneDeals = useContext(HeadphoneDealsContext);
    const items = headphoneDeals.slice(0,3);
    return (
        <div>
            
        </div>
    )
}

export default Discount
