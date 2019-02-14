import React, { Component } from 'react';
import { ScrollView, View, WebView,Dimensions, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube'

import {getTvDetail, getTvVideo, getTvCredits} from '../store/actions'

class TvShows extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        let tvId = 1396

        this.props.getTvDetail(tvId)
        this.props.getTvVideo(tvId)
        this.props.getTvCredits(tvId)
    }
    render() {
        const { details } = this.props
        if (details.TvCredits && details.TvVideo && details.TvDetail) {
            return (
                <ScrollView style={{ backgroundColor: "black" }}>
                    {/* <YouTube
                        videoId={details.TvVideo[0]['key']}  // The YouTube video ID
                        play={false}             // control playback of video with true/false
                        inline={true}       // control whether the video should play in fullscreen or inline
                        loop={true}             // control whether the video should loop when ended
                        apiKey="AIzaSyDnlEf6OgRhU1fefKIUtKJRH31UXR27QVo"

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}

                        style={{ alignSelf: 'stretch', height: 250 }}
                    /> */}
                                      <WebView 
                        source={{uri : `https://www.youtube.com/embed/${details.TvVideo[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        style={{ marginTop: 20, width: Dimensions.get('window').width, height: 300 }}
                    />
                    <ScrollView >
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {details.TvCredits.map(cast => {
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
                                <Text style={{ color: "white" }}>{details.TvDetail.name}</Text>
                                <Text style={{ color: "white" }}> Rating : {details.TvDetail.vote_average}</Text>
                            </View>
                            <Text style={{ color: "grey", marginTop: 6 }}>{details.TvDetail.overview}</Text>
                        </View>
                        {details.TvDetail.seasons ? 
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Seasons</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {details.TvDetail.seasons.map(season => {
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
            <Text>Loading....</Text>
        )
    }
}

const mapStateToProps = state => ({
    details: state.details,
})
const mapDispatchToProps = dispatch => ({
    getTvDetail: (id) => dispatch(getTvDetail(id)),
    getTvVideo: (id) => dispatch(getTvVideo(id)),
    getTvCredits: (id) => dispatch(getTvCredits(id)),


})
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);