import styled from 'styled-components'

export const Card = styled.View`
  width: ${props => props.width};
  padding: 10px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  margin-bottom: 10px;
`

export const Image = styled.Image`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`

export const FeedbackContainer = styled.View`
  width: 100%;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: Roboto_700Bold;
  text-align: justify;
  color: rgba(0, 0, 0, .85);
  margin-bottom: 15px;
`

export const Text = styled.Text`
  font-size: 16px;
  font-family: Roboto_700Bold;
  text-align: justify;
  color: rgba(0, 0, 0, .85);
`

export const Table = styled.View`
    width: 46%;
    margin-bottom: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #536DFE;
`

export const TableContainer = styled.View`
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const NumberDiv = styled.View`
    background-color: #536DFE;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
`

export const LetterDiv = styled.View`
    background-color: #FFFFFF;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
`

export const TableTextNumber = styled.Text`
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: justify;
  color: #FFFFFF;
`

export const TableText = styled.Text`
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: justify;
  color: rgba(0, 0, 0, .85);

`

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 80%;
  padding: 8px 10px;
  align-items: center;
  justify-content: center;
  background-color: #536DFE;
  border-radius: 10px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  color: #FFFFFF;
`
export const FlatListView = styled.View`
  flex: 4;
  padding: 10px 0;
  margin-bottom: 20px;
  
`