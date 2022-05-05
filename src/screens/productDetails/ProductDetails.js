// import React from "react";
// import { getById } from "../../api/product";

// export default class ProductDetails extends React.Component {
//     state = {
//         loading: true,
//         product: {},
//     };
//     componentDidMount() {
//         const id = this.props.id;

//         getById(parseInt(id)).then((product) => {
//             this.setState({
//                 product: product,
//                 loading: false,
//             });
//         });
//     }

//     // componentDidMount() {
//     //     ProductsApi.getAll().then((data) => {
//     //         this.setState({
//     //             products: data,
//     //         });
//     //         console.log({ data });
//     //     });
//     // }

//     render() {
//         return ( <
//             div > { " " } <
//             h2 > hello < /h2> <
//             h5 > { product.title } < /h5>{" "} <
//             /div>
//         );
//     }
// }

import React from "react";
import { getById } from "../../api/product";

export default class ProductDetails extends React.Component {
    state = {
        loading: true,
        product: {},
    };

    componentDidMount() {
        const id = this.propss.id;
        console.log(this.props.match);
        getById(Number(id)).then((product) => {
            this.setState({
                product,
                loading: false,
            });
        });
    }

    render() {
        // if (this.state.loading) return "Loading ..";

        const product = this.state.product;

        return ( <
            div >
            <
            div className = { "row" } >
            <
            div className = "col-6" >
            <
            img src = { product.image }
            width = { "100%" }
            />{" "} <
            /div>{" "} <
            div className = "col-6" >
            <
            h1 > { product.title } < /h1> <p> Price: {product.price}$ </p > { " " } <
            p > { product.description } < /p> <br / >
            <
            br / >
            <
            input type = "number" / >
            <
            br / >
            <
            br / >
            <
            button className = "btn btn-primary" > Add to Cart < /button>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}