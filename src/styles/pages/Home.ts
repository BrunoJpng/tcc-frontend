import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;

  main {
    width: 90%;
    max-width: 1100px;
    background: #fff;
    border-radius: 8px;
    padding: 1.25rem;
    margin: 0 auto;
  }

  fieldset {
    border: 0;
    padding: 2.4rem;

    legend {
      width: 100%;
      font: 700 2rem Archivo;
      color: #32264d;
      padding-bottom: 1rem;
      border-bottom: 1px solid #e6e6f0;
    }
  }
`;

export const PeriodContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
`;