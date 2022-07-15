import * as React from 'react';
import styled from "styled-components";
import Colonel from '../../assets/colonel.png';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Card = styled.div`
  text-align: center;
`
const CardTitle = styled.h1`
  font-size: 2em;
  text-align: center;
  color: #8CC63E;
`;

const CardSubtitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #DD6031;
`;

const CardText = styled.h1`
  font-size: 1.25em;
  text-align: justify;
  color: #000000;
`;

export default function Landing() {
  return (
    <>
      <Container>
        <Card>
          <CardTitle>Colonel Kernel's</CardTitle>
          <img src={Colonel} alt="Logo" height="120px"/>
          <CardSubtitle>Farmers Market</CardSubtitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis consequuntur possimus repellat facilis assumenda accusantium, libero minus quos ex facere fugiat ut, necessitatibus ea impedit natus eveniet earum doloremque? Laborum quibusdam consequatur, soluta dolor deserunt tempore eos maiores perferendis animi commodi? Neque inventore, assumenda laudantium vel quo iure ipsum reiciendis?
          </CardText>
        </Card>
      </Container>
    </>
  );
};