import React, { Component } from 'react';
import { ScrollView, View, Text, WebView, Image , Platform, Dimensions, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube'

import { getMovieDetail, getMovieVideo, getMovieCredits,} from '../store/actions'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height : 251
        }
    }
    componentDidMount() {
        let movieId = 244786

        this.props.getMovieDetail(movieId)
        this.props.getMovieVideo(movieId)
        this.props.getMovieCredits(movieId)
    }
    render() {
        const { details } = this.props
        if (details.movieCredits && details.movieVideo && details.movieDetail) {
            return (
                <ScrollView style={{backgroundColor : "black"}} >
                    {/* <YouTube
                        videoId={details.movieVideo[0]['key']}  // The YouTube video ID
                        play={false}             // control playback of video with true/false
                        inline={true}       // control whether the video should play in fullscreen or inline
                        loop={true}             // control whether the video should loop when ended
                        apiKey="AIzaSyDnlEf6OgRhU1fefKIUtKJRH31UXR27QVo"

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={ e => { console.log(e.error)
                            return this.setState({ error: e.error })}
                        }

                        style={{ alignSelf: 'stretch', height : 250 }}
                    /> */}
                    <WebView 
                        source={{uri : `https://www.youtube.com/embed/${details.movieVideo[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        style={{ marginTop: 20, width: Dimensions.get('window').width, height: 300 }}
                    />
                    <ScrollView >
                        <ScrollView style={{ margin: 0 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {details.movieCredits.map(cast => {
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
                                <Text style={{ color: "white" }}>{details.movieDetail.title}{details.movieDetail.name}</Text>
                                <Text style={{ color: "white" }}> Rating : {details.movieDetail.vote_average}</Text>
                            </View>
                            <Text style={{ color: "grey", marginTop: 6 }}>{details.movieDetail.overview}</Text>
                            <Text style={{ color: "grey", marginTop: 6 }}>{details.movieDetail.overview}</Text>
                            
                        </View>
                    </ScrollView>
                </ScrollView>
            )
        }
        return (
            <Text>Loading......</Text>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
    getMovieVideo: (id) => dispatch(getMovieVideo(id)),
    getMovieCredits: (id) => dispatch(getMovieCredits(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies);