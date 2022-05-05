import React from "react";

// import SectionProduct from "../../components/sectionProducts/SectionProduct";
// import SectionTopRate from "../../components/sectionTopRate/SectionTopRate";s
// import FeaturedSection from "../../components/featuredSection/FeaturedSection";
import Review from "../../components/review/Review";

import Slider from "../../components/slider/Slider";
import ProductItem from "../../components/productItem/ProductItem";
import ProductsApi from "../../api/product";
// import Slider from '../../components/slider/Slider'

export default class Home extends React.Component {
    state = {
        products: [],
    };

    componentDidMount() {
        ProductsApi.getAll().then((data) => {
            this.setState({
                products: data,
            });
            console.log({ data });
        });
    }
    render() {
        return ( <
            div className = "App" >
            <
            Slider / >
            <
            div className = "featured" >
            <
            h3 > Featured Products < /h3> <
            div className = "container" >
            <
            div className = "row" > { " " } {
                this.state.products.map((product) => ( <
                    div className = { "col-4" }
                    key = { product.id } >
                    <
                    ProductItem product = { product }
                    />{" "} <
                    /div>
                ))
            } { " " } <
            /div>{" "} <
            /div>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

// export default Home;