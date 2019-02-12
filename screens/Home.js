import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';

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
        const { InTheatres, TrendingCelebs, TrendingMovies, TrendingTv, ComingSoon } = this.props
        if (ComingSoon) {
            return (
                <ScrollView>
                    <Text>Got it</Text>
                    {ComingSoon.map(movie => (
                        <View key={movie.id}>
                            <Text>{movie['title']}</Text>
                        </View>
                    ))}
                </ScrollView>
            )
        }
        else return (
            <Text>Loading......</Text>
        )
    }
}

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