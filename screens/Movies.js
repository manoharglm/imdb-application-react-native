import React, { Component } from 'react';
import { ScrollView, View, Text, WebView, Image , Platform, Dimensions, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube'

import { getMovieDetail } from '../store/actions'
import CarouselPage from './CarouselPage'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height : 251
        }
    }
    componentDidMount() {
        let movieId = 155
        this.props.getMovieDetail(movieId)
    }
    render() {
        const { Movie } = this.props
        if (Movie) {
            return (
                <ScrollView style={{backgroundColor : "black"}} >
                    <WebView 
                        source={{uri : `https://www.youtube.com/embed/${Movie.videos.results[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        style={{ marginTop: 20, width: Dimensions.get('window').width, height: 300 }}
                    />
                    <ScrollView >
                        <ScrollView style={{ margin: 0 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {Movie.credits.cast.map(cast => {
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
                                <Text style={{ color: "white" }}>{Movie.title}</Text>
                                <Text style={{ color: "white" }}> Rating : {Movie.vote_average}</Text>
                            </View>
                            <Text style={{ color: "grey", marginTop: 6 }}>{Movie.overview}</Text>
                        </View>
                        <View style={{margin : 12}}>
                            <Text style={{color : "white"}}>Photos</Text>
                        <CarouselPage image={Movie.images.backdrops.map(img => img['file_path']).slice(8)}/>
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
    Movie: state.details.movieDetail,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies);