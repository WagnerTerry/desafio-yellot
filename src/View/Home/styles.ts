import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding: ${RFValue(20)}px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
