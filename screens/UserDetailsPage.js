import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';
import { WebView } from 'react-native-webview';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {"name":"Manohar Mano","email":"manoharocks@gmail.com","date":"Wed Mar 04 2020 23:35:00 GMT+0530 (India Standard Time)","phone":null,"photoURL":"https://lh3.googleusercontent.com/-klt2_NQucmA/AAAAAAAAAAI/AAAAAAAAASI/R_xCz0Ba-HI/photo.jpg"},
            userWatchList: [],
        }
    }

    componentDidMount(){
        this._retrieveData().then(data => {                        
            if(!data){
                this._storeData(JSON.stringify([])) 
            }else if(data.length !== 0){
                this.setState({
                    userWatchList:data,
                })
            }
        })        
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('WATCHLIST');
            return JSON.parse(value)
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <WebView 
                source={{ uri: 'https://thecodeabides.github.io/' }}
                startInLoadingState
            />

            // <ScrollView style={styles.container}>
            //     <View style={styles.userProfile}>
            //         <Image
            //             source={{ uri: this.state.userData.photoURL }}
            //             style={styles.userImage}
            //         />
            //         <ScrollView style={styles.userDetails}>
            //             <Text style={styles.userDetailsName}  >{this.state.userData.displayName}</Text>
            //             <Text style={styles.userDetailsEmail}  >{this.state.userData.email}</Text>
            //         </ScrollView>
            //     </View>
            //     <View style={styles.watchList}>
            //         <Text style={styles.watchListTitle}>watchList</Text>
            //         <ScrollView style={styles.watchListPosters} horizontal={true}>
            //             {
            //                 this.state.userWatchList.map(list => {
            //                     return <View key={list.id}>
            //                         <Image
            //                             source={{ uri: `https://image.tmdb.org/t/p/w200${list.poster_path}` }}
            //                             style={styles.watchListPoster}
            //                         />
            //                         <Text style={styles.watchListPosterTitle}>{list.original_title}</Text>
            //                     </View>
            //                 })
            //             }
            //         </ScrollView>
            //     </View>
            // </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        paddingTop: 15,
        paddingBottom: 15,
    },
    userImage: {
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        borderRadius: 150,
        width: 90,
        height: 90,
        marginLeft: 25,
        marginTop: 10,
    },
    userDetailsName: {
        color: 'white',
        fontSize: 20
    },
    userDetailsEmail: {
        color: 'white'
    },
    userDetails: {
        marginLeft: 15,
        marginRight: 15
    },
    watchList: {
        backgroundColor: '#1a1a1a',
        marginBottom: 20,
        marginTop: 20,
    },
    watchListTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10,
        marginTop: 10
    },
    watchListPoster: {
        width: 100,
        height: 150,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 8,
    },
    watchListPosterTitle: {
        color: 'white',
        alignSelf: 'center',
        marginLeft: 25,
    }

});

export default UserProfile
