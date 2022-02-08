import React from 'react';
import {CartState} from "../../context/Context";
import SingleProduct from "../SingleProduct";
import Filters from "../Filters/Filters";
import './home.css'

const Home = () => {
	// destructure products
	const {state: {products },
		productState: { sort, byStock, byFastDelivery, byRating, searchQuery }
	} = CartState();

	const transformProducts = () => {
		let sortedProducts = products;

		if (sort) {
			sortedProducts = sortedProducts.sort((a, b) =>
				sort === "lowToHigh" ? a.price - b.price : b.price - a.price
			);
		}

		if (!byStock) {
			sortedProducts = sortedProducts.filter((prod) => prod.inStock);
		}

		if (byFastDelivery) {
			sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
		}

		if (byRating) {
			sortedProducts = sortedProducts.filter(
				(prod) => prod.ratings >= byRating
			);
		}

		if (searchQuery) {
			sortedProducts = sortedProducts.filter((prod) =>
				prod.name.toLowerCase().includes(searchQuery)
			);
		}

		return sortedProducts;
	};


	console.log(products);
	return (
		<div className='home'>
			<Filters />
			<div className='productContainer'>
				{transformProducts().map((prod) => (
					<SingleProduct prod={prod} key={prod.id} />
				))}

				{/*{products.map((prod)=>{*/}
				{/*	// return <span>{prod.name}</span>*/}
				{/*	return <SingleProduct prod={prod} key={prod.id}/>*/}
				{/*})}*/}
			</div>
		</div>
	);
};

export default Home;
