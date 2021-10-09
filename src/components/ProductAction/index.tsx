import React from "react";

import { 
  Container,
  Condition,
  Title,
  HeartIcon,
  PriceInfo,
  DispatchTag,
  TruckIcon,
  StockInfo,
  EmbededButtons
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container className="box-info">
      <Condition>Novo | 13 vendidos</Condition>

      <Title>
        <h1>Fifa 22 Playstation 4 - Mídia Física</h1>
        <HeartIcon />
      </Title>

      <PriceInfo>
        <span className="old-price">R$ 285</span>

        <div>
          <span className="current-price">
            R$ 229

            <strong>19% OFF</strong>
          </span>

          <span className="interest-rate">
            em 12x R$ 21 <span>94</span>
          </span>
        </div>

        <span className="offer">19% OFF</span>

        <a href="/#">Ver os meios de pagamentos</a>

        <span className="offer-day">Oferta do dia</span>
      </PriceInfo>

      <DispatchTag>
        <TruckIcon />

        <div>
          <p>Frete Grátis</p>

          <span>Saiba os prazos de entrega e as formas de envio.</span>

          <a href="/#">Calcular o prazo de entrega</a>
        </div>
      </DispatchTag>

      <StockInfo>
        <span>
          <span className="quantity-title">Quantidade: </span>
          <span className="quantity-selected">1 unidade </span>
          <span className="quantity-availabe">(1235 disponíveis)</span>
        </span>

        <p>Você pode comprar apenas 1 unidade</p>
      </StockInfo>

      <EmbededButtons>
        <button className="buy-button">Comprar agora</button>

        <button className="cart-button">Adicionar ao carrinho</button>
      </EmbededButtons>
    </Container>
  );
};

export default ProductAction;
