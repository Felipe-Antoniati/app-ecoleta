import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "../styles/pages/s_landing";

const Home = () => {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");

  const navigation = useNavigation();

  function handleNavigationToPoints() {
    navigation.navigate("Points", {
      uf,
      city,
    });
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{
          width: 274,
          height: 368,
        }}
      >
        <View style={styles.content}>
          <Image source={require("../../assets/logo.png")} />

          <View>
            <Text style={styles.title}>
              Pontos de Coleta Seletiva Solidária
            </Text>
            <Text style={styles.description}>
              Ajude o Planeta! Ele é o unico que têm coxinha.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Digite o Estado (UF)"
            maxLength={2}
            autoCapitalize="characters"
            autoCorrect={false}
            value={uf}
            onChangeText={setUf}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite a cidade "
            autoCorrect={false}
            value={city}
            onChangeText={setCity}
          />

          <RectButton style={styles.button} onPress={handleNavigationToPoints}>
            <View style={styles.buttonIcon}>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Home;
