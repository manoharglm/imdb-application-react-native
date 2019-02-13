import React from "react";
import { View,StyleSheet, Button } from "react-native";
import LogoImage from './logoIcon';
import { Header , Icon} from 'react-native-elements';


class App extends React.Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <View>
        <Header  style={{display:"flex", alignContent:"center"}}
                    leftComponent={
                        <Icon 
                        name="menu"
                         color="white"
                         size = {32}
                            onPress={
                                () => this.props.openDrawer()
                            }/>
                    }
                    centerComponent={<LogoImage />}
                    rightComponent={
                          < Icon name = "search"
                          color = "white"
                          size = {
                              32
                          }
                          onPress = {
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
      
            {/* <HomeScreen /> */}
            </View>
     
    );
  }
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

export default App;
