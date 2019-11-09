import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
    Button,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import {
    TextInput,
} from 'react-native-paper';
import Header from './Header';
const theme = {
    roundness: 2,
    colors: {
        primary: '#F5C518',
        accent: 'yellow',
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    // componentDidMount(){
    //     this._retrieveData().then(data => {     
    //         console.log('data',data);

    //         if(!data){
    //             this._storeData(JSON.stringify([])) 
    //         }else if(data.length !== 0){
    //             this.setState({
    //                 userWatchList:data,
    //             })
    //         }
    //     })        
    // }

    // _retrieveData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('WATCHLIST');
    //         return JSON.parse(value)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    handleChange = (name) => {
        return (text) => {
            this.setState({ [name]: text })
        }

    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
                <View style={styles.container}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            alignSelf: 'center',
                            margin: 50,
                        }}
                        source={require('../assets/icon.png')}
                    />

                    <TextInput
                        style={{ backgroundColor: 'white', marginHorizontal: 20 }}
                        onChangeText={this.handleChange('username')}
                        value={this.state.username}
                        label='Email'
                        underlineColor='#F5C518'
                        theme={theme}
                        textContentType = 'emailAddress'
                        keyboardAppearance = 'email-address'
                    />
                    <TextInput
                        style={{ backgroundColor: 'white', marginHorizontal: 20 }}
                        onChangeText={this.handleChange('password')}
                        value={this.state.password}
                        label='Password'
                        secureTextEntry
                        underlineColor='#F5C518'
                        theme={theme}
                    />
                    <View
                        style={{
                            margin: 20,
                        }}
                    >
                        <Button
                            onPress={() => Keyboard.dismiss()}
                            title="LOGIN"
                            color="#F5C518"
                            accessibilityLabel="Login to application"
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1C1C',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
});


// const mapStateToProps = state => ({
//     InTheatres: state.trendingData.inTheatres,
//     TrendingMovies: state.trendingData.trendingMovies,
//     TrendingTv: state.trendingData.trendingTv,
//     TrendingCelebs: state.trendingData.trendingCelebs,
//     ComingSoon: state.trendingData.comingSoon
// })
// const mapDispatchToProps = dispatch => ({
//     trendingMovies: () => dispatch(trendingMovies()),
//     trendingTv: () => dispatch(trendingTv()),
//     trendingCelebs: () => dispatch(trendingCelebs()),
//     comingSoon: () => dispatch(comingSoon()),
//     inTheatres: () => dispatch(inTheatres())
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Login