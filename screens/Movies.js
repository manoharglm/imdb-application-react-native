import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    WebView, 
    Image , 
    ActivityIndicator, 
    Dimensions, 
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { getMovieDetail } from '../store/actions'
import CarouselPage from './CarouselPage'
import WatchlistButton from './watchListButton'
import CastCard from './CastCard'

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlistButton:false,
            handleButtonStyle:'buttonTheme'
        }
    }
    componentDidMount() {
        this.props.getMovieDetail(this.props.id)
    }
    render() {
        const { Movie } = this.props
        // console.log('Movie page manohar',this.props);
        
        
        if (Movie) {
            return (
                <ScrollView style={{backgroundColor: '#1E1C1C',}}>
                    {
                        (Movie.videos.results[0])
                        ? <WebView 
                            source={{uri : `https://www.youtube.com/embed/${Movie.videos.results[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                            style={{width: Dimensions.get('window').width, height: 250, }}
                            />
                        : <Text style={{color:'white', fontWeight:'bold', textAlign:'center'}}>Video unavailable</Text>
                    }
                    <View style={styles.watchlistRatingAndButton} >
                        <View style={styles.movieRating}>
                            <Image style={{ width: 25, height: 25, margin:4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                            <Text style={styles.ratingText}>{Movie.vote_average}</Text>
                        </View>
                        <WatchlistButton/>
                    </View>
                    <ScrollView>
                        <ScrollView style={{ margin: 0 }}>
                            <Text style={{ color: "white" }}>Top Billed Cast</Text>
                            <CastCard onCardClick={this.props.onCardClick} data={Movie.credits.cast}/>
                        </ScrollView>
                        <View style={{ margin: 12 }}>
                            <Text style={{ color: "white" }}>{Movie.title}</Text>
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
            <View style={styles.load}>
            <ActivityIndicator size={50} color="#ffd700" />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    load:{
        backgroundColor: '#1E1C1C',
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    ratingText:{
        color:'white',
    },
    movieRating:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    watchlistRatingAndButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20,
        marginBottom:20
    },
})
const mapStateToProps = state => ({
    Movie: state.details.movieDetail,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies);