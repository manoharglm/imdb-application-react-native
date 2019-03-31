import React, { Component } from 'react';
import { ScrollView, View, Text ,StyleSheet,Image, TouchableOpacity,ActivityIndicator, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import CarouselPage from './CarouselPage';
import Card from './Card';
import CelebsCard from './CelebsCard';
import { trendingMovies, trendingTv, trendingCelebs, inTheatres, comingSoon } from '../store/actions';

class Home extends Component {
     static navigationOptions = {
         header: null
     }

    componentDidMount() {
        this.props.trendingMovies()
        this.props.trendingCelebs()
        this.props.trendingTv()
        this.props.comingSoon()
        this.props.inTheatres()
    }
    render() {
        const { InTheatres, TrendingCelebs, TrendingMovies, TrendingTv, ComingSoon } = this.props;




        if (TrendingMovies && InTheatres && TrendingCelebs && TrendingTv && ComingSoon) {

        let trendingMoviesImage = [];

        let image = TrendingMovies.reduce(function (acc, x) {
            trendingMoviesImage.push(x.backdrop_path);
            return (acc);
        }, [])


            return (  

                <View style={styles.container}>
                  <StatusBar backgroundColor='#1E1C1C' barStyle="light-content" />

                 <View style={styles.images}>

                 <View 
                //  onPress = {
                //      () => this.props.navigation.navigate('FirstPage', {
                //          detailValue: "tv.id",
                //          typeOfData: "movie"

                //      })
                //  } 
                 >

                 < Image
                 style = {
                     {
                         width: 100,
                         height: 50,
                         margin: 5,
                         marginLeft:10
                     }
                 }
                 source = {
                     {
                         uri: 'https://londonfeministfilmfestival.files.wordpress.com/2017/05/imdb-logo.png'
                     }
                 }
                 />
                 </View>
                 
                 < TouchableOpacity onPress = {
                     () => this.props.navigation.navigate('UserDetailsPage', {
                         detailValue: "tv.id",
                         typeOfData:"movie"

                     })
                 } >
                     < Image
                     style = {
                         {
                             width: 50,
                             height: 50,
                             padding: 10,
                             margin: 5,
                             marginRight: 10

                         }
                     }
                     source = {
                         {
                             uri: 'https://cdn1.iconfinder.com/data/icons/navigation-elements/512/user-login-man-human-body-mobile-person-512.png'
                         }
                     }
                     />
                 </TouchableOpacity>
                 
                 </View>
              
                 <ScrollView style={styles.scrollView}>
                     < CarouselPage image={trendingMoviesImage} data={TrendingMovies} /> 
                     
                      <Text style={styles.textArea}>Trending Movies</Text>
                      <Card data={TrendingMovies} onCardClick={this.props.navigation}/>
 
                      <Text style={styles.textArea}>Trending Tv</Text>
                      <Card data={TrendingTv} onCardClick={this.props.navigation}/>

                      <Text style={styles.textArea}>Coming Soon Movies</Text>
                      <Card data={ComingSoon} onCardClick={this.props.navigation}/>

                      <Text style={styles.textArea}>In Theatres</Text>
                      <Card data={InTheatres} onCardClick={this.props.navigation}/>

                      <Text style={styles.textArea}>Trending Celebrities</Text>
                      <CelebsCard data={TrendingCelebs} onCardClick={this.props.navigation}/> 


                 </ScrollView>
                 </View>
            )
        }
        else return (
        <View style={styles.load}>
            <ActivityIndicator size={50} color="#ffd700" />
        </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1C1C',
        flex:1,
        justifyContent:"center"

    },
    textArea: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    card: {
        padding: 10

    },load:{
        backgroundColor: '#1E1C1C',
        height: "100%",
  
        //  flex: 1,
         justifyContent: "center",
         alignItems: "center"
     

    },
    images:{
        // flex:1,
        justifyContent:'space-between',
        flexDirection:"row"
    }
});


const mapStateToProps = state => ({
    InTheatres: state.trendingData.inTheatres,
    TrendingMovies: state.trendingData.trendingMovies,
    TrendingTv: state.trendingData.trendingTv,
    TrendingCelebs: state.trendingData.trendingCelebs,
    ComingSoon: state.trendingData.comingSoon
})
const mapDispatchToProps = dispatch => ({
    trendingMovies: () => dispatch(trendingMovies()),
    trendingTv: () => dispatch(trendingTv()),
    trendingCelebs: () => dispatch(trendingCelebs()),
    comingSoon: () => dispatch(comingSoon()),
    inTheatres: () => dispatch(inTheatres())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);