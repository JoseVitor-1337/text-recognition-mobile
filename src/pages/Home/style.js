import styled from 'styled-components'

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 50px;
  background-color: transparent;
`


export const Title = styled.Text`
  font-size: 20px;
  font-family: "Roboto_700Bold";
  text-align: justify;
  color: #FFFFFF;
`

export const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  padding-top: 50px;
`


export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 20px;
`


export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "Roboto_700Bold";
  text-align: center;
  color: #536DFE;
`

