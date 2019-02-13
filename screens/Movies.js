import React, { Component } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube'

import {
    trendingMovies, trendingTv, trendingCelebs,
    inTheatres, comingSoon, getMovieDetail, getMovieVideo, getMovieCredits,
    getTvDetail, getTvVideo, getTvCredits, getPerson, getFilmography
} from '../store/actions'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let movieId = 244786
        let pId = 287
        let tvId = 1396
        this.props.trendingMovies()
        this.props.trendingCelebs()
        this.props.trendingTv()
        this.props.comingSoon()
        this.props.inTheatres()

        // this.props.getMovieDetail(movieId)
        // this.props.getMovieVideo(movieId)
        // this.props.getMovieCredits(movieId)

        this.props.getTvDetail(tvId)
        this.props.getTvVideo(tvId)
        this.props.getTvCredits(tvId)

        // this.props.getPerson(pId)
        // this.props.getFilmography(pId)
    }
    render() {
        const { InTheatres, TrendingCelebs, TrendingMovies, TrendingTv, ComingSoon, details } = this.props
        if (ComingSoon && details.credits && details.video && details.detail) {
            return (
                <ScrollView style={{ backgroundColor: "black" }}>
                    <YouTube
                        videoId={details.video.results[0]['key']}  // The YouTube video ID
                        play={false}             // control playback of video with true/false
                        inline={true}       // control whether the video should play in fullscreen or inline
                        loop={true}             // control whether the video should loop when ended
                        apiKey="AIzaSyDnlEf6OgRhU1fefKIUtKJRH31UXR27QVo"

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}

                        style={{ alignSelf: 'stretch', height: 250 }}
                    />
                    <ScrollView >
                        {/* <Text>{JSON.stringify(details.credits)}</Text> */}
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {details.credits.map(cast => {
                                        return <View key={cast.id} style={{ margin: 12 }} >
                                            <Image style={{ width: 100, height: 100 }} 
                                            source={{ uri: `https://image.tmdb.org/t/p/w200/${cast['profile_path']}` }} />
                                            <Text style={{ color: "white" }}>{cast['name']}</Text>
                                            <Text style={{ color: "grey" }}>{cast['character']}</Text>
                                        </View>
                                    })}
                                </View>
                            </ScrollView>
                        </ScrollView>
                        <View style={{ margin: 12 }}>
                            <View style={{display: "flex", flexDirection : "row", justifyContent : "space-between"}}>
                                <Text style={{ color: "white" }}>{details.detail.title}{details.detail.name}</Text>
                                <Text style={{ color: "white" }}> Rating : {details.detail.vote_average}</Text>
                            </View>
                            <Text style={{ color: "grey", marginTop: 6 }}>{details.detail.overview}</Text>
                        </View>
                        {details.detail.seasons ? 
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Seasons</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {details.detail.seasons.map(season => {
                                        return <View key={season.id} style={{ margin: 8 }}>
                                            <Image style={{ width: 100, height: 100 }} 
                                            source={{ uri: `https://image.tmdb.org/t/p/w200/${season['poster_path']}` }} />
                                            <Text style={{ color: "white" }}>{season['name']}</Text>
                                            <Text style={{ color: "white" }}>Episodes : {season['episode_count']}</Text>
                                        </View>
                                    })}
                                </View>
                            </ScrollView>
                        </ScrollView> : null}
                    </ScrollView>
                </ScrollView>
            )
        }
        else return (
            <Text>Loading......</Text>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details,
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
    inTheatres: () => dispatch(inTheatres()),

    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    getMovieVideo: (id) => dispatch(getMovieVideo(id)),
    getMovieCredits: (id) => dispatch(getMovieCredits(id)),
    getTvDetail: (id) => dispatch(getTvDetail(id)),
    getTvVideo: (id) => dispatch(getTvVideo(id)),
    getTvCredits: (id) => dispatch(getTvCredits(id)),
    getPerson: (id) => dispatch(getPerson(id)),
    getFilmography: (id) => dispatch(getFilmography(id))

})
export default connect(mapStateToProps, mapDispatchToProps)(Home);