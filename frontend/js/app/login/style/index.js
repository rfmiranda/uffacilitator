import styled from 'styled-components';

const ImageBack = require('../image/estudante.jpg');

export const BackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${ImageBack}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 90%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  @media (min-width: 500px) {
    width: 40%;
  }
`;

export const Title = styled.span`
  font-size: 30px;
  color: #000;
  font-weight: bold;
`;
