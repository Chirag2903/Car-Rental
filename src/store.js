import { configureStore } from '@reduxjs/toolkit';
import { userreducer } from './reducer/userreducer';
import { orderinforeducers, productdetailsreducers, productsreducer } from './reducer/productreducer';
import { myorderreducers, neworderreducer, orderdetailsreducer } from './reducer/orderreducer';


const store = configureStore({
    reducer: {
        user: userreducer,
        products: productsreducer,
        product: productdetailsreducers,
        neworder: neworderreducer,
        orderinfo: orderinforeducers,
        myorder: myorderreducers,
        orderdetails: orderdetailsreducer
    }
})


export default store;