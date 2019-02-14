import React, { Component } from 'react';
import { ScrollView, View, WebView,Dimensions, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube'

import { getTvDetail } from '../store/actions'
import CarouselPage from './CarouselPage';

class TvShows extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.getTvDetail(1399)
    }
    render() {
        const { TvDetail } = this.props
        if (TvDetail) {
            return (
                <ScrollView style={{ backgroundColor: "black" }}>
                                      <WebView 
                        source={{uri : `https://www.youtube.com/embed/${TvDetail.videos.results[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        style={{ marginTop: 20, width: Dimensions.get('window').width, height: 300 }}
                    />
                    <ScrollView >
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {TvDetail.credits.cast.map(cast => {
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
                                <Text style={{ color: "white" }}>{TvDetail.name}</Text>
                                <Text style={{ color: "white" }}> Rating : {TvDetail.vote_average}</Text>
                            </View>
                            <Text style={{ color: "grey", marginTop: 6 }}>{TvDetail.overview}</Text>
                        </View>
                        {TvDetail.seasons ? 
                        <ScrollView style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>Seasons</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {TvDetail.seasons.map(season => {
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
                       <View style={{ margin: 12 }}>
                       <Text style={{color : "white" , marginBottom : 4}}>Photos</Text>
                        <CarouselPage image={TvDetail.images.backdrops.map(img => img['file_path']).slice(8)}/>
                       </View>
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
    TvDetail: state.details.TvDetail,
})
const mapDispatchToProps = dispatch => ({
    getTvDetail: (id) => dispatch(getTvDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TvShows);