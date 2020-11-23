import styled from "styled-components";

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

export const Body = styled.View`
  flex: 14;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const CameraIconBox = styled.TouchableOpacity`
  margin-top: -50px;
  padding: 12px;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  background-color: #FFFFFF;
  border-radius: 50px;
  border: 4px solid #536dfe;
`;

export const ButtonRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items:center;
  justify-content: space-around;
  padding: 10px;
`;

export const Footer = styled.View`
  flex: 4;
  align-items: center;
  justify-content: space-around;
  background-color: #536dfe;
`;
