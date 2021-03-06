import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';
import Header from './Header';


// import { WebBrowser } from 'expo';
// import { MonoText } from '../components/StyledText';
// import { trendingMovies, trendingTv, trendingCelebs, inTheatres, comingSoon } from '../store/actions'
// const {screenWidth } = Dimensions.get('window');
// const carouselHeight = screenWidth * 0.8;
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: { "uid": "Arr2riMW3QYGjoiTsR0wmbxB0UF3", "displayName": "Rajesh Jonnalagadda", "photoURL": "https://lh3.googleusercontent.com/-oDpXn75FIKU/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQPqZ08tOXRBYWpN_56S2v24xzd88w/mo/photo.jpg", "email": "rajesh13004034@gmail.com", "emailVerified": true, "phoneNumber": null, "isAnonymous": false, "providerData": [{ "uid": "111627952593110852205", "displayName": "Rajesh Jonnalagadda", "photoURL": "https://lh3.googleusercontent.com/-oDpXn75FIKU/AAAAAAAAAAI/AAAAAAAAAAA/ACevoQPqZ08tOXRBYWpN_56S2v24xzd88w/mo/photo.jpg", "email": "rajesh13004034@gmail.com", "phoneNumber": null, "providerId": "google.com" }], "apiKey": "AIzaSyAIdmrTIAFXwJ66lhsloHJHcy4bd1f3Yp8", "appName": "[DEFAULT]", "authDomain": "new-project-37ec5.firebaseapp.com", "stsTokenManager": { "apiKey": "AIzaSyAIdmrTIAFXwJ66lhsloHJHcy4bd1f3Yp8", "refreshToken": "AGK09ANwr1Gl0oUe1fnfoWwAU3GLR6BtFBo2MZ9gmj4qe-S3pwtgz4Mt0o8Mv2Wno4OjIeyoMYqluXCv1m3xvcYScBSzYYF8eaRtQNX-mzGG-bII2_vsan-YvW2gLS1GqbULqFt9kJcOQCrdEpzM4XgurwNabuRI1J-JxLSbIGVF1nfWBU96SgbWLLt9hNBmULBo14IXvmMSVFjpT-pxwdT4c3Z7I82GO79dqRp8dRqVlA4Wfv0wYR_Ls_N-dpWDK2ZqwVUOsKfX27l5ZsXPZtR2GEybEJXUyudayLzPcSG8CHEfbn06KNAKAA4nudmI1-ecOWKxC1_Eqpg-i-wVIncc__p3eCw0DqXF2raNFDDOAqpJ6Wu2u0_m6bmPqMvAQ2r0mvfGuGZ_oQjusU0ZC5E6S0ZGFPbBS8wWCVpUs8tQES9kR5cMbrQ", "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3ZmNiY2EzNjhmZTc3ODA4ODMwYzgxMDAxMjFlYzdiZGUyMmNmMGUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbmV3LXByb2plY3QtMzdlYzUiLCJuYW1lIjoiUmFqZXNoIEpvbm5hbGFnYWRkYSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW9EcFhuNzVGSUtVL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDZXZvUVBxWjA4dE9YUkJZV3BOXzU2UzJ2MjR4emQ4OHcvbW8vcGhvdG8uanBnIiwiYXVkIjoibmV3LXByb2plY3QtMzdlYzUiLCJhdXRoX3RpbWUiOjE1NTAwMzM0NjYsInVzZXJfaWQiOiJBcnIycmlNVzNRWUdqb2lUc1Iwd21ieEIwVUYzIiwic3ViIjoiQXJyMnJpTVczUVlHam9pVHNSMHdtYnhCMFVGMyIsImlhdCI6MTU1MDAzMzQ2NiwiZXhwIjoxNTUwMDM3MDY2LCJlbWFpbCI6InJhamVzaDEzMDA0MDM0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTExNjI3OTUyNTkzMTEwODUyMjA1Il0sImVtYWlsIjpbInJhamVzaDEzMDA0MDM0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.MVmrGrX8o-1vbENCz2KznDnVdBRvm0rjCHr7lCMD0FCwrkj0tQk8mnap5oT0KgjIXpPLBh-tZSFVqHMjLSQ_I_H7BC-gknJd2kIgUsbihq6vxOe3ZE3X0CR8u6K4q8CaOfgzdoH78XlZRQzGeUCRQzFGYCt6C_raY6b9Y5xXmS-BjrxHFZC_pl-WE5gcQlpUJkG5Bck7nrjrs7qVPJQ9DLLDwvdPrtPJmYnSCl-PxRLQPLkYeXT9jl9_3R10ZP70xHFZ9SUCw7RkBq86ZSd5B9gaZxUiLenxBVIljzkideMsX_wnazg2bw1PFRaUJTOOOuqqyQ4IMlIA7Pg4-4EOlg", "expirationTime": 1550037064895 }, "redirectEventId": null, "lastLoginAt": "1550033466756", "createdAt": "1548740951000" },
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
            <View style={styles.container}>
                < Header />
                <ScrollView>
                <View style={styles.userProfile}>
                    <Image
                        source={{ uri: this.state.userData.photoURL }}
                        style={styles.userImage}
                    />
                    <ScrollView style={styles.userDetails}>
                        <Text style={styles.userDetailsName}  >{this.state.userData.displayName}</Text>
                        {/* <View style={styles.userDetailsEmailContainer}> */}
                        {/* <Text style={styles.userDetailsEmailHeader}  >Email</Text> */}
                        <Text style={styles.userDetailsEmail}  >{this.state.userData.email}</Text>
                        {/* </View> */}
                    </ScrollView>
                </View>
                <View style={styles.watchList}>
                    <Text style={styles.watchListTitle}>watchList</Text>
                    <ScrollView style={styles.watchListPosters} horizontal={true}>
                        {
                            this.state.userWatchList.map(list => {
                                return <View key={list.id}>
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w200${list.poster_path}` }}
                                        style={styles.watchListPoster}
                                    />
                                    <Text style={styles.watchListPosterTitle}>{list.original_title}</Text>
                                </View>
                            })
                        }
                    </ScrollView>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#1E1C1C',
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
        width: 150,
        height: 150,
        marginLeft: 25,
        marginTop: 10,
    },
    // userDetailsEmailContainer:{
    //   flexDirection:'row',
    // },
    userDetailsName: {
        color: 'white',
        fontSize: 20
    },
    userDetailsEmail: {
        color: 'white'
    },
    // userDetailsEmailHeader:{
    //   color:'white',
    //   paddingRight:20,
    // },
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
export default UserProfile