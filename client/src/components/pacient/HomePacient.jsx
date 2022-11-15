import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import { Carousel } from "../Carousel/Carousel";
import { Loading } from "../loading/Loading";
import { ButtonHomePacientQueries } from "../shared/Button";
import { ListaConsultas } from "./ListaConsultas";

export function HomePacient({ navigation }) {
  const payments = useSelector((state) => state.queries.payments);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      {!payments.length ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 300 }}>
          <View style={styles.container}>
            <View style={styles.containerBtnForm}>
              <TouchableOpacity
                title="FormularioUsuario"
                onPress={() =>
                  navigation.navigate("FormPacient", {
                    name: "FormPacient",
                  })
                }
                style={styles.btn}
              >
                <Text style={{ textAlign: "center" }}>
                  Formulario de Usuario
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontSize: theme.fontSize.secondaryText, paddingTop: 15 }}
            >
              Hola,
            </Text>
            <Text
              style={{
                fontSize: theme.fontSize.primaryText,
                paddingBottom: 10,
                paddingLeft: 10,
              }}
            >
              Daniela Gomez
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              similique, illo expedita et dicta ullam, voluptate animi quasi
              voluptatem, voluptates repellat deserunt dolore atque voluptatibus
              id totam sapiente a incidunt!
            </Text>
            <View style={{ alignItems: "center", padding: 100 }}>
              <ButtonHomePacientQueries navigation={navigation} />
            </View>
            <Text>Favoritos:</Text>
            {/* <CardPacient first_name={first_name} last_name, country, specialty}/> */}
            <View style={styles.containerCarousel}>
              <Carousel />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerBtnForm: {
    alignItems: "center",
    padding: 25,
  },
  containerBtnQueries: {
    alignItems: "center",
    padding: 100,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
  },
  containerCarousel: {
    width: "100%",
    height: 670,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    borderRadius: 10,
    marginVertical: 40,
    justifyContent: "center",
    paddingBottom: 40,
  },
});
