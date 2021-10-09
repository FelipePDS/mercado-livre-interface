import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  box-shadow: var(--panel-shadow);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-radius: 4px 4px 0 0;

  background-color: var(--color-panel-header);

  > div a {
    font-size: 12px;
    text-decoration: none;

    color: var(--color-blue-100);

    padding: 2.5px 0;

    transition: color .3s;

    & + a {
      padding-left: 10px;
      border-left: 1px solid var(--color-border);
      margin-left: 10px;
    }

    &.back-to-list {
      color: var(--color-black);
    }

    &:hover {
      color: var(--color-blue-200);
    }
  }
`;

export const Panel = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;

  border-radius: 0 0 4px 4px;
  background-color: var(--color-white);
`;

export const Column = styled.div`
  padding: 16px;

  &.section-info .box-info {
    display: flex;
    flex-direction: column;

    border: 1px solid var(--color-border);
    border-radius: 8px;

    & + .box-info {
      margin-top: 1rem;
    }
  }
`;

export const Gallery = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 530px;

  > img {
    height: 78%;
  }
`;

export const WarrantyContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;

  & + div {
    margin-top: 1rem;
    border-top: 1px solid var(--color-border);
  }

  > h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;

    > span + span {
      margin-top: 20px;
    }

    .title {
      font-size: 15px;
      color: var(--color-gray-300);
    }

    .description {
      margin-top: 10px;
      font-size: 12px;
      color: var(--color-gray-800);
    }
  }

  > a {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-blue-100);
    text-decoration: none;
    
    transition: color .3s;

    &:hover {
      color: var(--color-blue-200);
    }
  }
`;

export const Description = styled.div`
  margin: 0 30px;
  padding: 35px 0;
  border-top: 1px solid var(--color-border);

  > h2 {
    font-size: 24px;
    font-weight: 400;
    color: var(--color-black);
    margin-bottom: 32px;
  }

  > p {
    font-size: 18px;
    color: var(--color-gray-100);
    line-height: 27px;
  }
`;
