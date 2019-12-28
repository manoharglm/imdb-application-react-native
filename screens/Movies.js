import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    ActivityIndicator,
    Dimensions,
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { getMovieDetail } from '../store/actions'
import CarouselPage from './CarouselPage'
import WatchlistButton from './watchListButton'
import CastCard from './CastCard'
import YouTube from 'react-native-youtube'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlistButton: false,
            handleButtonStyle: 'buttonTheme'
        }
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.id)
    }
    render() {
        console.log(this.props);

        const { Movie, id } = this.props

        if (Movie && Movie.id === id) {
            return (
                <ScrollView style={{
                    flex: 1,
                    backgroundColor: '#1E1C1C',
                }}>
                    <View
                        style={{
                            backgroundColor: '#1E1C1C',
                        }}
                    >

                        {
                            (Movie.videos.results[0])
                                ? <YouTube
                                    apiKey="AIzaSyCxVxsC5k46b8I-CLXlF3cZHjpiqP_myVk"
                                    videoId={Movie.videos.results[0]['key']}   // The YouTube video ID
                                    style={{ alignSelf: 'stretch', height: 300 }}
                                    resumePlayAndroid={false}
                                />
                                : <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Video unavailable</Text>
                        }
                    </View>

                    <View style={styles.watchlistRatingAndButton} >
                        <View style={styles.movieRating}>
                            <Image style={{ width: 25, height: 25, margin: 4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                            <Text style={styles.ratingText}>{Movie.vote_average}</Text>
                        </View>
                        <WatchlistButton
                            data={Movie}
                        />
                    </View>
                    <Text style={{ color: "white" }}>Top Billed Cast</Text>
                    <CastCard onCardClick={this.props.onCardClick} data={Movie.credits.cast} />
                    <View style={{ margin: 12 }}>
                        <Text style={{ color: "white" }}>{Movie.title}</Text>
                        <Text style={{ color: "grey", marginTop: 6 }}>{Movie.overview}</Text>
                    </View>
                    <View style={{ margin: 12 }}>
                        <Text style={{ color: "white" }}>Photos</Text>
                        <CarouselPage image={Movie.images.backdrops.map(img => img['file_path']).slice(8)} />
                    </View>
                </ScrollView>
            )
        }
        return (
            <View style={styles.load}>
                <ActivityIndicator size={50} color="#ffd700" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    load: {
        backgroundColor: '#1E1C1C',
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    ratingText: {
        color: 'white',
    },
    movieRating: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    watchlistRatingAndButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        backgroundColor: '#1E1C1C',
        marginBottom: 20
    },
})
const mapStateToProps = state => ({
    Movie: state.details.movieDetail,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies);