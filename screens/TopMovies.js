import React , {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {topMovies} from '../store/actions'
import {connect} from 'react-redux';
import CarouselPage from './CarouselPage'

class TopMovies extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    componentDidMount(){
        this.props.topMovies()
    }
    render(){
        const { Movies, Trending } = this.props
        if(Movies) {
        return(
            <View>
                <CarouselPage image={Movies.map(movie => movie['backdrop_path'])}/>
                <ScrollView style={{ margin : 8}}>
                    <Text style={{color : "white", fontSize : 20}}>Trending Movies</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    
                        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
                            {Trending.map(movie => {
                                return <View key={movie.id} style={{ margin: 12 }} >
                                    <Image style={{ width: 100, height: 100 }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w200/${movie['poster_path']}` }} />
                                    <Text style={{ color: "white" }}>{movie['title']}</Text>
                                    <Text style={{ color: "grey" }}>Rating : {movie['vote_average']}</Text>
                                </View>
                            })}
                        </View>
                    </ScrollView>
                    <Text style={{color : "white", fontSize : 20}}>Top Rated Movies</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
                            {Movies.map(movie => {
                                return <View key={movie.id} style={{ margin: 12 }} >
                                    <Image style={{ width: 100, height: 100 }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w200/${movie['poster_path']}` }} />
                                    <Text style={{ color: "white" }}>{movie['title']}</Text>
                                    <Text style={{ color: "grey" }}>Rating : {movie['vote_average']}</Text>
                                </View>
                            })}
                        </View>
                    </ScrollView>
                    </ScrollView>
                    
            </View>
        )
        }
        else return <Text>loading</Text>
    }
}
const mapStateToProps = state => ({
    Movies : state.top.movies,
    Trending : state.trendingData.trendingMovies
})
const mapDispatchToProps = () => dispatch =>({
    topMovies : () => dispatch(topMovies())
})
export default connect(mapStateToProps, mapDispatchToProps)(TopMovies)