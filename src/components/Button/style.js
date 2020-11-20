import styled from "styled-components";

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: ${props => props.width || 'auto'};
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  color: ${(props) => props.color};
`;
