import React, { Component } from 'react';
import { ScrollView, View, Text ,StyleSheet,Image } from 'react-native';
import { connect } from 'react-redux';
import CarouselPage from './CarouselPage';
import Card from './Card';
import CelebsCard from './CelebsCard';

import { trendingMovies, trendingTv, trendingCelebs, inTheatres, comingSoon } from '../store/actions'

class Home extends Component {
    constructor(props) {
        super(props)
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
                <ScrollView style={styles.scrollView}>
                    < CarouselPage image={trendingMoviesImage} />
                     
                     <Text style={styles.textArea}>Trending Movies</Text>
                     <Card data={TrendingMovies}/>

                     <Text style={styles.textArea}>Trending Tv</Text>
                     <Card data={TrendingTv}/>

                     <Text style={styles.textArea}>Coming Soon Movies</Text>
                     <Card data={ComingSoon}/>
                     <Text style={styles.textArea}>In Theatres</Text>
                     <Card data={InTheatres}/>

                     <Text style={styles.textArea}>Trending Celebrities</Text>
                     <CelebsCard data={TrendingCelebs}/>

                </ScrollView>
                </View>
            )
        }
        else return (
            
            // <Text>Loading</Text>

            <Image
         source={require('../assets/loading.gif')}
       />
        )
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
    scrollView:{
        marginBottom:200
    },
    card: {
        padding: 10

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
export default connect(mapStateToProps,mapDispatchToProps) (Home);