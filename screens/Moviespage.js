import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import SearchHeader from 'react-native-search-header';
// import HomePageContent from './HomePageContent';
import { Header , Icon} from 'react-native-elements';
import LogoImage from './logoIcon';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
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
                
                {/* <HomePageContent /> */}
                

                < SearchHeader 
                    ref={
                        (searchHeader) => {
                            this.searchHeader = searchHeader;
                        }
                    }
                    placeholder='Search...'
                    placeholderColor='gray'
                    onClear={
                        () => {
                            console.log(`Clearing input!`);
                        }
                    }
                    onGetAutocompletions={
                        async (text) => {
                            if (text) {
                                const response = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&q=${text}`, {
                                    method: `get`
                                });
                                const data = await response.json();
                                return data[1];
                            } else {
                                return [];
                            }
                        }
                    }

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1C1C',
    },
    textArea: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    header: {

    },
    scrollView:{
        marginBottom:50
    },
    card: {
        padding: 10

    }
});

