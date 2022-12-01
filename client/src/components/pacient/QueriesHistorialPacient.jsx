import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";
import { SelectList } from "react-native-dropdown-select-list";
import { ButtonBlue, ButtonQueries } from "../shared/Button";
import { QueriesListPacient } from "./QueriesListPacient";
import { Loading } from "../main/Loading";
import { getQueries } from "../../slices/queriesActions";

export function QueriesHistorialPacient({ navigation }) {
  const queries = useSelector((state) => state.queries.queries);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQueries());
  }, []);

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              width: 200,
              paddingBottom: 20,
              paddingTop: 30,
            }}
          >
            <TouchableOpacity
              title="GenerateQuery"
              onPress={() =>
                navigation.navigate("GenerateQuery", {
                  name: "GenerateQuery",
                })
              }
              style={styles.btn}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                GENERAR CONSULTA
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.containerBtnQueries}></View>
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Historial de Consultas
          </Text>
        </View>
        {queries.length && queries.length === 0 ? (
          <View style={{ width: "90%" }}>
            <Loading />
          </View>
        ) : (
          <View style={styles.containerHistorial}>
            <ScrollView>
              <View>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 5,
                  }}
                ></View>
                <View>
                  <QueriesListPacient navigation={navigation} />
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  containerBtnQueries: {
    alignItems: "center",
    padding: 40,
  },
  btn: {
    backgroundColor: theme.colors.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: theme.borderRadius.borderRadiusBotton,
    marginTop: 100,
  },

  selectContainer: {
    paddingHorizontal: 200,
    flex: 1,
    paddingVertical: 5,
  },
  text: {
    fontSize: 12,
    fontFamily: theme.fonts.form,
    paddingVertical: 10,
  },
  containerHistorial: {
    margin: 35,
    width: "80%",
    height: 300,
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
    marginVertical: 60,
    paddingBottom: 20,
  },
  text: {
    fontWeight: theme.fontWeights.bold,
    padding: 10,
    color: "white",
  },
  // textInput: {
  //   backgroundColor: "#A8A7A3",
  //   borderRadius: 10,
  // },
});
