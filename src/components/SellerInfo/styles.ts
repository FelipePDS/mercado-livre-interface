import styled, { css } from "styled-components";
import { 
  HiOutlineLocationMarker, 
  HiOutlineChatAlt2, 
  HiOutlineClock 
} from 'react-icons/hi';

export const Container = styled.div`
  padding: 24px 16px;
`;

const iconCss = css`
  width: 28px;
  height: 28px;
  color: var(--color-gray-300);
`;

export const Title = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;

  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px
    }

    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray-100)
    }
  }
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCss}
`;

export const ReputationCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 33px;
`;

export const ReputationThermometer = styled.ol`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 7px;
  align-items: center;
  padding: 0 4px;

  list-style: none;

  width: 100%;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background-color: var(--reputation-1);
    }

    &:nth-child(2) {
      background-color: var(--reputation-2);
    }

    &:nth-child(3) {
      background-color: var(--reputation-3);
    }

    &:nth-child(4) {
      background-color: var(--reputation-4);
    }

    &:nth-child(5) {
      background-color: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 12px;

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    width: 33%;
    padding: 0 10px;

    > strong {
      font-size: 24px;
      font-weight: normal;
      height: 28px;
      margin-bottom: 2px;
    }

    > span {
      font-size: 12px;
    }

    & + div {
      &::before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);

        height: 36px;
        border-left: 1px solid var(--color-border);

        content: '';
      }
    }
  }
`;

export const SupportIcon = styled(HiOutlineChatAlt2)`
  ${iconCss}
`;

export const ClockIcon = styled(HiOutlineClock)`
  ${iconCss}
`;

export const More = styled.a`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-blue-100);
  text-decoration: none;
  
  transition: color .3s;

  &:hover {
    color: var(--color-blue-200);
  }
`;
