import React from 'react';

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description
} from './styles';

import tshitImage from '../../assets/tshirt.png';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="/#">Compartilhar</a>
        <a href="/#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshitImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const Info = () => (
  <Description>
    <h2>Description</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque unde minima dolor quae assumenda non? Sapiente sunt molestiae quidem impedit id accusamus sequi, ratione quisquam, fuga, velit libero ut? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis non sint blanditiis, minima quia ex numquam ullam libero tempora ipsa esse est veritatis ad atque sit minus! Consectetur, molestias autem.

      <br />
      <br />

      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />

      <br />

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officia accusamus omnis illo molestias modi sapiente dignissimos id dolor saepe, voluptatum et eos error? Dignissimos maiores officiis itaque velit soluta!
    </p>
  </Description>
);

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>

        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
);

export default Product;
