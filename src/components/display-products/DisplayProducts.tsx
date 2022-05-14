import React from 'react';
import styled from "styled-components";
import ProductItem from '../../models/ProductItem';
import Navbar from '../navbar/Narbar';
import { Product } from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const DisplayProducts = () => {

  const products: ProductItem[] = [
    {
        id:1,
        image:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
      {
        id:3,
        image:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
      {
        id:4,
        image:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
      {
        id:5,
        image:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
      {
        id:6,
        image:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
      {
        id:8,
        image:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        name: '',
        description: '',
        price: 5,
        quantity: 10,
      },
  ]

  return (
    <React.Fragment>
        <Navbar/>
        <Container>
        {products.map((item) => (
            <Product product={item} key={item.id} />
        ))}
        </Container>
    </React.Fragment>
    
  );
};