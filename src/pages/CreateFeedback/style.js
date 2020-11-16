import styled from "styled-components";

import { Feather } from "@expo/vector-icons";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 25px;
`;

export const Header = styled.View`
  flex: 2;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff;
`;

export const Link = styled.Text`
  font-size: 18px;
  font-family: Roboto_700Bold;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
`;

export const ArrowLeftIcon = styled(Feather)``;

export const CameraIcon = styled(Feather)`
  margin-top: -50px;
`;

export const Body = styled.View`
  flex: 15;
`;

export const Footer = styled.View`
  flex: 3;
  align-items: center;
  justify-content: space-around;
  background-color: #536dfe;
`;
