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
        img:"https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:2,
        img:"https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:3,
        img:"https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:4,
        img:"https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:5,
        img:"https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:6,
        img:"https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:7,
        img:"https://www.vintageindustries.nl/download_front/qympzk1762/2217_Arrow_Jacket_Forest.png",
        name: '',
        desc: '',
        price: ''
      },
      {
        id:8,
        img:"https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
        name: '',
        desc: '',
        price: ''
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