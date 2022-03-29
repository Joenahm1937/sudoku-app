import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./Styles";
import { Button_Component } from "./Buttons_Component";
import { Header_Component } from "./Header_Component";
import { Footer_Component } from "./Footer_Component";
import { Selections_Component } from "./Selections_Component";
import { PopUp } from "./popups/PopUp";
import { IconButton } from "./icon_button/IconButton";
import { Plus_Icon2 } from "./icon_button/Icons";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"; 

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgTuCvSB7CNLlQF80rcWcRFp9OIEW4hYw",
  authDomain: "sudorkle-9010a.firebaseapp.com",
  projectId: "sudorkle-9010a",
  storageBucket: "sudorkle-9010a.appspot.com",
  messagingSenderId: "507911751706",
  appId: "1:507911751706:web:be303433a89fe820cde9a3",
  measurementId: "G-1E6XSJE1HG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const HomePage = (props = { navigation }) => {
  const [infoVisible, setInfoVisible] = React.useState(false);
  const [plusVisible, setPlusVisible] = React.useState(false);

  const [difficulty, setDifficulty] = useState("DIFFICULTY");
  const [gameMode, setGameMode] = useState("GAME MODE");
  const [lives, setLives] = useState("LIVES");
  const [colorTheme, setColorTheme] = useState({
    tileColor: "#F4C3C3",
    backgroundColor: "white"
  });

  return (
    <View
      style={[
        styles.HomePageContainer,
        { backgroundColor: colorTheme.backgroundColor },
      ]}
    >
      <Header_Component
        colorTheme={colorTheme}
        setColorTheme={setColorTheme}
        db={db}
        navigation={props.navigation}
      ></Header_Component>
      <Selections_Component
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        gameMode={gameMode}
        setGameMode={setGameMode}
        lives={lives}
        setLives={setLives}
      ></Selections_Component>
      <Button_Component
        difficulty={difficulty}
        gameMode={gameMode}
        lives={lives}
        colorTheme={colorTheme}
        navigation={props.navigation}
        prevGame={props?.route?.params?.gameState}
      ></Button_Component>
      <Footer_Component
        setInfoVisible={setInfoVisible}
        setPlusVisible={setPlusVisible}
      ></Footer_Component>

      <PopUp visible={infoVisible}>
        <View style={{ alignItems: "center" }}>
          <View style={styles.popupHeader}>
            <TouchableOpacity onPress={() => setInfoVisible(false)}>
              <Image
                source={require("../assets/x.png")}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.PUsubtitle}>What is Sudoku?</Text>
        <Text style={styles.PUparagraphs}>
          Sudoku is a traditional game played by people on their phones!
        </Text>
        <Text style={styles.PUsubtitle}>Gamemodes!</Text>
        <Text style={styles.PUparagraphs}>
          Classic Mode - Plain and simple sudoku for beginners and pros alike!
        </Text>
        <Text style={styles.PUparagraphs}>
          Timed Mode - Race against the clock in this fast paced doku puzzle!
        </Text>
        <Text style={styles.PUsubtitle}>Credits:</Text>
        <Text style={styles.PUparagraphs}>Thank you to these people...</Text>
        <Text style={styles.PUparagraphs}>Colin.</Text>
        <TouchableOpacity
          style={[styles.PUbutton, styles.center]}
          onPress={() => console.warn("ur mum")}
        ></TouchableOpacity>
      </PopUp>

      <PopUp visible={plusVisible}>
          <View style={{ alignItems: "center"}}>
              <View style={styles.popupHeader}>
                <TouchableOpacity onPress={() => setPlusVisible(false)}>
                    <Image
                        source={require("../assets/x.png")}
                        style={{ height: 30, width: 30 }}
                    />
                </TouchableOpacity>
              </View>
            <IconButton
            SVG={Plus_Icon2}
            onPressFunction={() => console.log("urmum")}
            ></IconButton>
          </View>
          <TouchableOpacity
                style={styles.PUbutton}
                onPress={() => console.log("urmum")}
            ></TouchableOpacity>
      </PopUp>

    </View>
  );
};

export default HomePage;
