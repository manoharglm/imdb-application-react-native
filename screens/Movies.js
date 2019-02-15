import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    WebView, 
    Image , 
    Platform, 
    ActivityIndicator, 
    Dimensions, 
    StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { Button, ThemeProvider } from 'react-native-elements';
import { getMovieDetail } from '../store/actions'
import CarouselPage from './CarouselPage'

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
    handleButton =()=>{
        this.setState(prevState => ({
            watchlistButton : !prevState.watchlistButton
        }))
    }
    render() {
        const { Movie } = this.props
        let butStyle = styles.watchlistBefore
        let buttonTitle = "Add to Watchlist"
        if(this.state.watchlistButton){
            butStyle = styles.watchlistAfter
            buttonTitle = "Added to Watchlist"
        }
        if (Movie) {
            return (
                <ScrollView style={{backgroundColor : "black"}} >
                    <WebView 
                        source={{uri : `https://www.youtube.com/embed/${Movie.videos.results[0]['key']}?rel=0&autoplay=0&showinfo=0&controls=0`}}
                        style={{ marginTop: 20, width: Dimensions.get('window').width, height: 300 }}
                    />
                    <View style={styles.watchlistRatingAndButton} >
                        <View style={styles.movieRating}>
                            <Image style={{ width: 25, height: 25, margin:4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                            <Text style={styles.ratingText}>{Movie.vote_average}</Text>
                        </View>
                        <Button onPress={this.handleButton} buttonStyle={butStyle} titleStyle={butStyle} title={buttonTitle}/>
                    </View>
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
            <ActivityIndicator size={150} color="#ffd700" />
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
    watchlistBefore:{
        backgroundColor:'transparent'
    },
    watchlistAfter:{
        backgroundColor:'gold',
        borderColor:'white',
    },
    watchlistRatingAndButton:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20,
        marginBottom:20
    },
    ratingText:{
        color:'white',
    },
    movieRating:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})
const mapStateToProps = state => ({
    Movie: state.details.movieDetail,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Movies);