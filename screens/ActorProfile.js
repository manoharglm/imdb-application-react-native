import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';

import Carousel from './CarouselPage';
import {connect} from 'react-redux';
import Card2 from './Card2';
import {getPerson, getFilmography} from '../store/actions'

class ActorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorDetails: {},
            actorMovies: [],
            actorPictures:[],
        };
    }

componentDidMount() {
    const {detailValue} = (this.props.navigation.state.params);
    this.props.getPerson(detailValue)
    this.props.getFilmography(detailValue)
}
render() {
    const {actorDetail, films} = this.props
    let trendingMoviesImage = [];
    
      if(actorDetail && films){
        let image = actorDetail.images.profiles.reduce(function (acc, x) {
            trendingMoviesImage.push(x.file_path);
            return (acc);
        }, [])
        return (
            <ScrollView style={styles.container}>
                <Carousel image={trendingMoviesImage}/>
                <View style={styles.actorProfile}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w200${actorDetail.profile_path}` }}
                        style={styles.actorProfileImage}
                    />
                    <View style={styles.actorDetails}>
                        <Text style={[styles.actorDetailsItem, styles.actorName]} >{actorDetail.name}</Text>
                        <Text style={styles.actorDetailsItem}>{actorDetail.birthday}</Text>
                        <Text style={styles.actorDetailsItem}>{actorDetail.place_of_birth}</Text>
                        <Text style={styles.actorDetailsItem}>{actorDetail.popularity}</Text>
                    </View>
                </View>
                <View style={styles.movieList}>
                    <Text style={styles.movieListTitle}>Filmography</Text>
                    <Card2 data={films} />
                </View>
                <View style={styles.actorPersonalDetails}>
                    <Text style={styles.actorPersonalDetailsTitle}>Personal Details</Text>
                    <View style={styles.actorPersonalDetailsTable}>
                    <FlatList
                        data={[
                            {key: 'Birthday'},
                            {key: 'Place of birth'},
                            {key: 'Popularity'},
                            {key: 'Homepage'},
                        ]}
                        renderItem={({item}) => 
                            <Text style={styles.actorPersonalDetailsList}>{item.key.toString()}</Text>
                        }
                    />
                    <FlatList
                        data={[
                            {key: actorDetail.birthday},
                            {key: actorDetail.place_of_birth},
                            {key: actorDetail.popularity},
                            {key: actorDetail.homepage},
                        ]}
                        renderItem={({item}) => 
                            <Text style={styles.actorPersonalDetailsList}>{item.key.toString()}</Text>
                        }
                        keyExtractor={(item) => item.toString()}
                    />
                    </View>
                    <View style={styles.actorPersonalDetailsBiography}>
                        <Text style={styles.actorPersonalDetailsBiographyTitle}>Biography</Text>
                        <Text style={styles.actorPersonalDetailsBiographyContent}>{actorDetail.biography}</Text>
                    </View>
                </View>
            </ScrollView>
        )
                }
                else return (<View style={styles.load}>
                    <ActivityIndicator size={150} color="#ffd700" />
                </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    actorPoster:{
        height:250,
        width:350,
    },
    actorProfileImage: {
        resizeMode: 'cover',
        alignSelf: 'flex-start',
        borderRadius: 150,
        width: 150,
        height: 150,
        marginLeft: 25,
        marginTop: 10,
    },
    actorProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 20,
        marginBottom: 20,
    },
    actorDetailsItem: {
        fontSize: 14,
        fontWeight: '400',
        paddingLeft: 15,
        paddingTop: 5,
        color: 'white'
    },
    actorName: {
        fontSize: 18,
        fontWeight: '700',
    },
    moviePosterTitle: {
        color: 'white',
        alignSelf: 'center',
        marginLeft: 25,
    },
    movieList: {
        backgroundColor: '#1a1a1a',
        paddingBottom:10
    },
    moviePoster: {
        width: 100,
        height: 150,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 8,
    },
    movieListPosters:{
        marginRight:20
    },
    movieListTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10
    },
    actorPersonalDetails: {
        backgroundColor: '#1a1a1a',
        marginTop: 10,
        marginBottom: 10,
    },
    actorPersonalDetailsTitle:{
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10    
    },
    actorPersonalDetailsList:{
        color:'gray',
        paddingBottom:5
    },
    actorPersonalDetailsTable:{
        flexDirection:'row',
        paddingLeft:20
    },
    actorPersonalDetailsBiography:{
        color:'white',
        marginTop:20,
        marginBottom:20,
    },
    actorPersonalDetailsBiographyContent:{
        color:'gray',
        paddingLeft:20,
    },
    actorPersonalDetailsBiographyTitle:{
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10  
    }
  
});
const mapStateToProps = state =>({
    actorDetail : state.details.person,
    films : state.details.personFilms
})
const mapDispatchToProps = () => dispatch =>({
    getPerson : (id) => dispatch(getPerson(id)),
    getFilmography : (id) => dispatch(getFilmography(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ActorProfile);
