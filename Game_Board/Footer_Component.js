import { View, Button } from "react-native";
import { styles } from './Styles';
const Footer_Component = (props = {navigation}) => {
    return(
        <View style={styles.footerContainer}>
            <Button
                onPress={() => props.navigation.navigate("Temporary_View_Navigator")}
                title="Temporary Navigation to Open Screen"
                >
                Navigate
            </Button>
        </View>
    );
}

export { Footer_Component };