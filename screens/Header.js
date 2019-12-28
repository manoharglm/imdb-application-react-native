import React from "react";
import { View, StyleSheet, Button } from "react-native";
import LogoImage from './logoIcon';
import { Header, Icon } from 'react-native-elements';

function App(props) {
    return (
        <View>
            <Header style={{ display: "flex", alignContent: "center" }}
                leftComponent={
                    <Icon
                        name="menu"
                        color="white"
                        size={32}
                    />
                }
                centerComponent={<LogoImage />}
                rightComponent={
                    < Icon name="search"
                        color="white"
                        size={
                            32
                        }
                        onPress={
                            () => this.searchHeader.show()
                        }
                    />

                }
                containerStyle={
                    {
                        height: 60,
                        padding: 0,
                        backgroundColor: '#1E1C1C',
                    }
                }
            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1C1C'
    },
    textArea: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    search: {
    },
    card: {
        padding: 10

    }
});
export default React.memo(App);