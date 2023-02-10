import { SafeAreaView, Platform, StatusBar} from "react-native";

const Container = ({children, backgroundColor}) => {
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: backgroundColor,
                paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
            }}
        >
            {children}
        </SafeAreaView>
    );
}

export default Container;