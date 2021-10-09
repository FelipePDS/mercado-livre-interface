import React from 'react';

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  WarrantyContent,
  Description
} from './styles';

import fifaImage from '../../assets/fifa.webp';

import ProductAction from '../ProductAction';
import SellerInfo from '../SellerInfo';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <div>
          <a href="/#" className="back-to-list">Voltar à lista</a>
        </div>

        <div>
          <a href="/#">Compartilhar</a>
          <a href="/#">Vender um igual</a>
        </div>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={fifaImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column className="section-info">
          <ProductAction />
          <SellerInfo />

          <div className="box-info">
            <WarrantyBox />
            <WarrantyBox />
            <WarrantyBox />
          </div>
        </Column>
      </Panel>
    </Container>
  );
}

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Fifa 22 Playstation 4 - Mídia Física

      <br />
      <br />

      Powered by football(tm), ea sports(tm) fifa 22 deixa o jogo ainda mais real com avanços fundamentais de jogabilidade e uma nova temporada de inovações em todos os modos.

      <br />
      <br />

      Jogabilidade <br />
      A jogabilidade reimaginada cria avanços fundamentais que você vai sentir em todos os modos do fifa 22. A recriação de goleiros e goleiras leva mais compostura e consistência à posição mais importante do campo, uma nova física da bola reimagina cada passe, finalização e gol e corridas explosivas fazem você sentir a aceleração dos jogadores e jogadoras de futebol com mais velocidade no jogo. <br />

      - recriação de goleiros e goleiras: um novo sistema para goleiros e goleiras oferece um novo nível de inteligência para a última linha de defesa, possibilitando tomadas de decisões mais inteligentes e defesas mais confiáveis entre as traves. No fifa 22, a personalidade de posicionamento de goleiros e goleiras replica os diferentes estilos da posição no jogo - para representar os reflexos ultrarrápidos de muralhas de classe mundial. <br />

      - física real da bola: dados do mundo real importados para o fifa 22 levam a física da bola do jogo para um novo nível de realismo. Parâmetros ajustados, incluindo velocidade, efeito, puxada do ar, resistência do ar, fricção do terreno e fricção de rolagem, fazem com que cada toque, marcação, chute, voleio, passe e drible pareçam, se movam e voem como na realidade. <br />

      -corrida explosiva: uma nova mecânica de jogabilidade que muda a dinâmica de situações um contra um, a corrida explosiva dá a você mais controle sobre a aceleração durante a condução ou defesa. Atraia adversários e escolha quando liberar toda sua velocidade para se desvencilhar da defesa enquanto você conduz seu time para frente no ataque. <br />

      -novas táticas de ataque: novas táticas de ataque dão a você mais controle sobre como você deseja que o seu time jogue. Organize seu time com estilos diferentes em cada lado do campo: mantenha a bola no seu campo e dispare ao ataque com uma armação rápida no campo do adversário, jogue direto de área a área ou forme o seu próprio estilo exclusivo.

      <br />
      <br />

      Modo carreira <br />
      Viva seus sonhos no futebol no modo carreira do fifa 22 enquanto você cria um clube e o lidera de candidatos ao rebaixamento para gigantes globais, além de aproveitar uma experiência reformulada na carreira de jogador, que dá a você mais formas de progredir, conquistar e mergulhar de cabeça na jornada de craque virtual pelo jogo.

      <br />
      <br />

      Fifa ultimate team <br />
      Monte o seu time dos sonhos e dispute no modo mais popular do fifa, com milhares de jogadores para adicionar ao seu clube e inúmeras maneiras de personalizar seu clube dentro e fora dos gramados. <br />

      - heróis do fut: celebre os jogadores mais memoráveis do futebol com os heróis do fut, novos itens que representam os momentos inesquecíveis que os tornaram favoritos das torcidas. Os heróis do fut oferecem novas oportunidades de montagem de elenco com entrosamento específico da liga e uma chance de recriar os momentos nostálgicos que os colocaram no elenco dos heróis do fut 22. <br />

      Pro clubs com novas opções de personalização para destacar seu clube nas arquibancadas e nos gramados, um novo sistema de desenvolvimento de jogadores que coloca você no controle do desenvolvimento de craque virtual e uma jogabilidade social mais simples do que nunca, chegou a hora de reunir o elenco para uma nova temporada do pro clubs.
    </p>
  </Description>
);

const WarrantyBox = () => (
  <WarrantyContent>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Mercado Pago</p>

        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="title">Garantia da loja</p>
        
        <p className="description">Garantia do vendedor: 30 dias</p>
      </span>
    </div>

    <a href="/#">Saiba mais sobre garantia</a>
  </WarrantyContent>
);

export default Product;
