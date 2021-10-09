import styled from "styled-components";
import { AiOutlineHeart } from 'react-icons/ai';
import { FiTruck } from 'react-icons/fi';

export const Container = styled.div`
  padding: 24px 16px;
`;

export const Condition = styled.div`
  color: var(--color-gray-800);
  font-size: 12px;
  font-weight: 400;
  word-spacing: 1.1px;
  white-space: pre-wrap;
`;

export const Title = styled.div`
  display: flex;

  margin-top: .5rem;

  > h1 {
    font-size: 20px;
    color: var(--color-black);
  }
`;

export const HeartIcon = styled(AiOutlineHeart)`
  width: 29px;
  height: 29px;

  color: var(--color-blue-100);
  cursor: pointer;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;

  > .old-price {
    color: var(--color-gray-800);
    font-size: 15px;
    font-weight: 400;
    letter-spacing: .5px;
    word-spacing: 1.5px;
    text-decoration: line-through;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-top: -2px;

    > .current-price {
      display: flex;
      margin-left: -2px;

      font-size: 33px;
      font-weight: 400;
      letter-spacing: 1px;
      word-spacing: 1.5px;
      color: var(--color-black);

      > strong {
        display: flex;
        align-items: center;

        margin-left: 7px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: .6px;
        word-spacing: -.2px !important;
        color: var(--color-green);
        opacity: .8;
      }
    }

    > .interest-rate {
      display: flex;
      align-items: flex-start;
      margin-top: 1px;

      font-size: 16px;
      font-weight: 500;
      color: var(--color-black);

      > span {
        font-size: 8px;
      }
    }
  }

  > .offer {
    margin-top: .9rem;
    padding: 7px;
    max-width: min-content;

    background-color: var(--color-blue-05);
    color: var(--color-blue-100);

    border-radius: 2px;

    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }

  > a {
    margin-top: 9px;
    font-size: 12px;
    font-weight: 600;
    color: var(--color-blue-100);
    opacity: .9;
    text-decoration: none;
    
    transition: color .3s;

    &:hover {
      color: var(--color-blue-200);
    }
  }

  > .offer-day {
    margin-top: 1.2rem;
    padding: 3px 4px;
    max-width: min-content;

    background-color: var(--color-blue-100);
    color: var(--color-white);

    border-radius: 2px;

    text-transform: uppercase;
    font-size: 10px;
    font-weight: 600;
    white-space: nowrap;
  }
`;

export const DispatchTag = styled.div`
  display: flex;

  margin-top: 1.2rem;
  gap: .65rem;

  > div {
    display: flex;
    flex-direction: column;

    > p {
      font-size: 15px;
      font-weight: 500;
      color: var(--color-green);
    }

    > span {
      margin-top: 4px;
      font-size: 13px;
      color: var(--color-gray-800);
    }

    > a {
      margin-top: 9px;
      font-size: 12px;
      font-weight: 600;
      color: var(--color-blue-100);
      opacity: .9;
      text-decoration: none;
      
      transition: color .3s;

      &:hover {
        color: var(--color-blue-200);
      }
    }
  }
`;

export const TruckIcon = styled(FiTruck)`
  width: 20px;
  height: 20px;
  color: var(--color-green);
  opacity: .9;
`;

export const StockInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.3rem;
  gap: .6rem;

  > span {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    > .quantity-title {
      font-size: 14px;
      color: var(--color-black);
    }

    > .quantity-selected {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-black);
      opacity: .9;
    }

    > .quantity-availabe {
      font-size: 13px;
      color: var(--color-gray-800);
    }
  }

  > p {
    font-size: 13px;
    color: var(--color-gray-800);
  }
`;

export const EmbededButtons = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
  gap: .6rem;

  > button {
    width: 100%;
    padding: 1rem 0;
    border-radius: 8px;

    font-size: 15px;
    font-weight: 600;

    cursor: pointer;
    transition: .3s;

    &:hover {
      filter: brightness(.9);
    }
  }

  > .buy-button {
    background-color: var(--color-blue-100);
    color: var(--color-white);
  }

  > .cart-button {
    background-color: var(--color-blue-05);
    color: var(--color-blue-100);
  }
`;
