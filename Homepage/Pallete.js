import React from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { IconButton } from "./icon_button/IconButton";
import { Sound_Icon, Calendar, Pallete_Icon } from "./icon_button/Icons";

export default class Pallete extends React.Component {

    animation = new Animated.Value(0);

    setColorTheme = this.props.setColorTheme;

    toggleColors = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true
        }).start()

        this.open = !this.open;
    };
    render() {
        const colorMap = [{
            //OG
            tileColor: "#F4C3C3",
            backgroundColor: "white"
          }, {
              //black
            tileColor: "grey",
            backgroundColor: "rgba(0,0,0,0.7)"
          }, {
              //lavendar
            tileColor: "#B2D7AC",
            backgroundColor: "#AEA6E2"
          }];

        const orange = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 30]
                    })
                }
            ]
        };

        const green = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 60]
                    })
                }
            ]
        };

        const black = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 90]
                    })
                }
            ]
        };

        const lavender = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 120]
                    })
                }
            ]
        };

        const pink = {
            transform: [
                { scale: this.animation },
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 150]
                    })
                }
            ]
        };

        const rotation = {
            transform: [{
                rotate: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"]
                })
            }]
        };

        return (
            <View style={[styles.container, this.props.style]}>
                
                {/* orange */}
                <TouchableWithoutFeedback onPress={console.log('orange')}>
                    <Animated.View
                        style={[{backgroundColor:"#FA7022"},styles.colorCircle, orange]}
                    ></Animated.View>
                </TouchableWithoutFeedback>

                {/* green */}
                <TouchableWithoutFeedback onPress={console.log('green')}>
                    <Animated.View
                        style={[{backgroundColor:"#54976F"},styles.colorCircle, green]}
                    ></Animated.View>
                </TouchableWithoutFeedback>

                {/* black */}
                <TouchableWithoutFeedback onPress={console.log('black')}>
                    <Animated.View
                        style={[{backgroundColor:"black"},styles.colorCircle, black]}
                    ></Animated.View>
                </TouchableWithoutFeedback>

                {/* lavender */}
                <TouchableWithoutFeedback onPress={console.log('lavender')}>
                    <Animated.View
                        style={[{backgroundColor:"#AEA6E2"},styles.colorCircle, lavender]}
                    ></Animated.View>
                </TouchableWithoutFeedback>

                {/* pinkish */}
                <TouchableWithoutFeedback onPress={console.log('pink')}>
                    <Animated.View
                        style={[{backgroundColor:"#D78ACF"},styles.colorCircle, pink]}
                    ></Animated.View>
                </TouchableWithoutFeedback>

                <Animated.View style={[{position:"absolute"}, rotation]}>
                    <IconButton
                    SVG={Pallete_Icon}
                    onPressFunction={() => this.toggleColors()}>
                    </IconButton>
                </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute"
    },
    colorCircle: {
        position: "absolute",
        width: 20,
        height: 20,
        borderRadius: 20/2,
    }
})