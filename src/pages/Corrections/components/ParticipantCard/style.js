import styled from 'styled-components'

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
`

export const Title = styled.Text`
  font-size: 26px;

  font-family: Roboto_700Bold;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 20px;
`

export const MiniTitle = styled.Text`
  font-size: 22px;
  font-family: Roboto_700Bold;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
`

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  height: 75px;
`

export const TextView = styled.View`
  width: ${props => props.width || "50%"};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
`

export const FlatListContainer = styled.View`
 
  width: 100%;
  flex-direction: row;
  padding: 20px 0;
`

export const LanguageRow = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
`

export const Paragraph = styled.Text`
  font-size: 16px;
  font-family: Roboto_500Medium;
  text-align: center;
  color: rgba(0, 0, 0, 0.85);
`

export const Discipline = styled.Text`
 font-size: 18px;
  font-family: Roboto_500Medium;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Box = styled.View`
 width: 50%;
 height: 70px;
 align-items: center;
 justify-content: center;
`

export const Circle = styled.View`
 width: 40px;
 height: 40px;
 border-radius: 100px;
 background-color: #536dfe;
 align-items: center;
 justify-content: center;
`

export const Note = styled.Text`
  font-size: 20px;
  font-family: Roboto_500Medium;
  text-align: center;
  color: #FFFFFF;
`