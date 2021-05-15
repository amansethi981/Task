import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import SearchBar from "../SearchScreen";


const ResultsDetail = () => {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <SearchBar />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#e5e4eb",
                  marginHorizontal: 15,
                  borderRadius: 25,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Max Safety
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#e5e4eb",
                  marginHorizontal: 15,
                  borderRadius: 25,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Pro
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#e5e4eb",
                  marginHorizontal: 15,
                  borderRadius: 25,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Cuisines
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#e5e4eb",
                  marginHorizontal: 15,
                  borderRadius: 25,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Rating
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  backgroundColor: "#e5e4eb",
                  marginHorizontal: 15,
                  borderRadius: 25,
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingLeft: 10,
                  }}
                >
                  Rating
                </Text>
              </View>
            </View>
          </ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
              <View>
                <Image
                  style={styles.image}
                  source={require("../../img/Burger.jpg")}
                />
                <Text style={styles.name}>BBQ</Text>
                <Text style={styles.name}>5 Stars Reviews</Text>
              </View>
              <View>
                <Image
                  style={styles.image}
                  source={require("../../img/Burger.jpg")}
                />
                <Text style={styles.name}>BBQ</Text>
                <Text style={styles.name}>5 Stars Reviews</Text>
              </View>
            </View>
          </ScrollView>
          <Text
            style={{
              fontWeight: "bold",
              marginTop: 40,
              textAlign: "center",
              fontSize: 30,
            }}
          >
            Eat What to make happy
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
            </View>
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 40 }}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
              <View>
                <Image
                  style={styles.imgcircular}
                  source={require("../../img/Burger.jpg")}
                />
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    flexDirection: "row",
    marginTop: 50,
  },
  image: {
    width: 250,
    height: 220,
    borderRadius: 4,
    marginBottom: 5,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
  imgcircular: {
    width: 70,
    height: 70,
    borderRadius: 1000,
    marginLeft: 15,
  },
});

export default ResultsDetail;
