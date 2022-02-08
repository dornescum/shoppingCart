import React from 'react';
import {CartState} from "../context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
	// destructure products
	const {state: {products }} = CartState();
	console.log(products);
	return (
		<div className='home'>
			{/*<Filters />*/}
			<div className='productContainer'>
				{!products && <p>no products</p>}
				{products.map((prod)=>{
					// return <span>{prod.name}</span>
					return <SingleProduct prod={prod} key={prod.id}/>
				})}
			</div>
		</div>
	);
};

export default Home;
