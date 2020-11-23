import styled from 'styled-components'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25px 10px 0 10px;
  background-color: #fffffF;
`;

export const FlatListContainer = styled.View`
  height: ${props => props.height};
  flex: 18;
`;

