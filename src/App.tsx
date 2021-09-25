import React from "react";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

let width = 300;

const AppStyle = StyleSheet.create({
  container: {
    width,
    height: width,
    // backgroundColor: "#000",
    flexDirection: "column",
    borderRadius: 10
  },

  bleub: {
    width: width / 3 - 40,
    height: width / 3 - 40,
    borderRadius: 400,
    borderWidth: 1
  }
});

let i = [];

let fadeInOUt = {
  0: { scale: 0, opacity: 0 },
  0.5: { scale: 1, opacity: 1 },
  1: { scale: 0, opacity: 0 }
};
var z: number[] = [0, 1, 2];
for (var k: number = 0; k < 3; k++) {
  i[k] = [];
  for (var l: number = 0; l < 3; l++) {
    i[k].push(l);
  }
}

let delaytime = (plate: number[], x: number, y: number): number => {
  var delay: number;

  if (plate[0] === 0) {
    delay = 0 + x * 1000 + y * 1000;
    return delay;
  }

  if (plate[1] === 1) {
    delay = 1000 + x * 1000 + y * 1000;
    return delay;
  }

  if (plate[2] === 2) {
    delay = 2000 + x * 1000 + y * 1000;
    return delay;
  }
};

const App: React.FC = () => (
  <View
    style={{
      flexDirection: "row",
      transform: [{ translateX: 200 }, { translateY: 200 }]
    }}
  >
    {z.map((z0, zin) => (
      <View
        style={{
          ...AppStyle.container,
          transform: [
            { rotate: "45deg" },
            { translateX: -zin * 20 },
            { translateY: -zin * 20 }
          ],
          position: "absolute"
        }}
      >
        {i.map((items0: [], ind0: number) => (
          <View
            key={ind0}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {items0.map((items: [], ind: number) => (
              <Animatable.Image
                source={{
                  uri:
                    "https://png.pngtree.com/background/20210710/original/pngtree-abstract-gradient-trend-color-fuzzy-halo-background-picture-image_989443.jpg"
                }}
                style={AppStyle.bleub}
                animation={fadeInOUt}
                iterationCount="infinite"
                duration={1100}
                delay={delaytime(z, k, l)}
                easing="ease-in"
                iterationDelay={5000}
              />
            ))}
          </View>
        ))}
      </View>
    ))}
  </View>
);

export default App;
