import React, { FC } from "react";
import { SafeAreaView, Text } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

const Home: FC = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>Hello World</Text>
      </Container>
    </SafeAreaView>
  );
};

export { Home };
