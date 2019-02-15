import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
} from 'react-native';

import Carousel from './CarouselPage'

class ActorProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actorDetails: {
                "birthday": "1954-04-07",
                "known_for_department": "Acting",
                "deathday": null,
                "id": 18897,
                "name": "Jackie Chan",
                "also_known_as": [
                    "Джеки Чан",
                    "成龙",
                    "成龍",
                    "陈港生",
                    "房仕龙",
                    "جاكي شان",
                    "성룡",
                    "ジャッキー・チェン",
                    "เฉินหลง",
                    "Džekijs Čans",
                    "Джекі Чан"
                ],
                "gender": 2,
                "biography": "Jackie Chan, born Chan Kong-sang, is a Hong Kong actor, action choreographer, filmmaker, comedian, producer, martial artist, screenwriter, entrepreneur, singer and stunt performer. In his movies, he is known for his acrobatic fighting style, comic timing, use of improvised weapons, and innovative stunts. Jackie Chan has been acting since the 1970s and has appeared in over 100 films.\n\nChan has received stars on the Hong Kong Avenue of Stars and the Hollywood Walk of Fame. As a cultural icon, Chan has been referenced in various pop songs, cartoons, and video games. Chan is also a Cantopop and Mandopop star, having released a number of albums and sung many of the theme songs for the films in which he has starred.\n\nChan was born on April 7, 1954, in Victoria Peak, in the former Crown colony of Hong Kong, as Chan Kong-sang (meaning \"born in Hong Kong\") to Charles and Lee-Lee Chan, refugees from the Chinese Civil War. He was nicknamed Paopao (Chinese: 炮炮, literally meaning \"Cannonball\") because he was such a big baby, weighing 12 pounds, or about 5.4 kgs. Since his parents worked for the French Consul to Hong Kong, Chan spent his formative years within the grounds of the consul's residence in the Victoria Peak district. Chan attended the Nah-Hwa Primary School on Hong Kong Island, where he failed his first year, after which his parents withdrew him from the school.\n\nIn 1960, his father immigrated to Canberra, Australia, to work as the head cook for the American embassy, and Chan was sent to the China Drama Academy, a Peking Opera School run by Master Yu Jim-yuen. Chan trained rigorously for the next decade, excelling in martial arts and acrobatics. He eventually became part of the Seven Little Fortunes, a performance group made up of the school's best students, gaining the stage name Yuen Lo in homage to his master. Chan became close friends with fellow group members Sammo Hung and Yuen Biao, the three of them later to be known as the Three Brothers or Three Dragons. At the age of 17, he worked as a stuntman in the Bruce Lee films Fist of Fury and Enter the Dragon under the stage name Chan Yuen Lung.   He received his first starring role later that year, in Little Tiger of Canton, which had a limited release in Hong Kong in 1973.",
                "popularity": 14.776,
                "place_of_birth": "Victoria Peak, Hong Kong",
                "profile_path": "/pmKJ4sGvPQ3imzXaFnjW4Vk5Gyc.jpg",
                "adult": false,
                "imdb_id": "nm0000329",
                "homepage": "http://jackiechan.com/"
            },
            actorMovies: [{
                "adult": false,
                "backdrop_path": "/pmLEmMLYCreFAxfdCt5uO1wDgSi.jpg",
                "genre_ids": [12, 16, 10751, 35],
                "id": 9502,
                "original_language": "en",
                "original_title": "Kung Fu Panda",
                "overview": "When the Valley of Peace is threatened, lazy Po the panda discovers his destiny as the \"chosen one\" and trains to become a kung fu hero, but transforming the unsleek slacker into a brave warrior won't be easy. It's up to Master Shifu and the Furious Five -- Tigress, Crane, Mantis, Viper and Monkey -- to give it a try.",
                "poster_path": "/2Paj1nufT0jeSY0G4u3RC31HIGT.jpg",
                "release_date": "2008-06-04",
                "title": "Kung Fu Panda",
                "video": false,
                "vote_average": 7.0,
                "vote_count": 5600,
                "popularity": 21.989,
                "media_type": "movie"
            }, {
                "adult": false,
                "backdrop_path": "/eyiE1vuizMKVu8MoZkg2xsramFl.jpg",
                "genre_ids": [16, 10751],
                "id": 49444,
                "original_language": "en",
                "original_title": "Kung Fu Panda 2",
                "overview": "Po is now living his dream as The Dragon Warrior, protecting the Valley of Peace alongside his friends and fellow kung fu masters, The Furious Five - Tigress, Crane, Mantis, Viper and Monkey. But Po’s new life of awesomeness is threatened by the emergence of a formidable villain, who plans to use a secret, unstoppable weapon to conquer China and destroy kung fu. It is up to Po and The Furious Five to journey across China to face this threat and vanquish it. But how can Po stop a weapon that can stop kung fu? He must look to his past and uncover the secrets of his mysterious origins; only then will he be able to unlock the strength he needs to succeed.",
                "poster_path": "/Fzyy2dauoKxjUzUPYYo3kJkJAW.jpg",
                "release_date": "2011-05-25",
                "title": "Kung Fu Panda 2",
                "video": false,
                "vote_average": 6.7,
                "vote_count": 3315,
                "popularity": 16.654,
                "media_type": "movie"
            }, {
                "id": 38575,
                "video": false,
                "vote_count": 2880,
                "vote_average": 6.3,
                "title": "The Karate Kid",
                "release_date": "2010-06-10",
                "original_language": "en",
                "original_title": "The Karate Kid",
                "genre_ids": [28, 12, 18, 10751],
                "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                "adult": false,
                "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
                "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
                "popularity": 9.711,
                "media_type": "movie"
            }],
            actorPictures:[
                  {
                    "iso_639_1": null,
                    "width": 300,
                    "height": 450,
                    "vote_count": 4,
                    "vote_average": 5.246,
                    "file_path": "/j4WC8lWhpwvPWuu7YDQecA3bmqc.jpg",
                    "aspect_ratio": 0.66666666666667
                  },
                  {
                    "iso_639_1": null,
                    "width": 1000,
                    "height": 1500,
                    "vote_count": 12,
                    "vote_average": 5.396,
                    "file_path": "/pmKJ4sGvPQ3imzXaFnjW4Vk5Gyc.jpg",
                    "aspect_ratio": 0.66666666666667
                  },
                  {
                    "iso_639_1": null,
                    "width": 1000,
                    "height": 1500,
                    "vote_count": 6,
                    "vote_average": 5.258,
                    "file_path": "/tEJazyboCJcsvxnhKH3Hf33Bmgj.jpg",
                    "aspect_ratio": 0.66666666666667
                  },
                  {
                    "iso_639_1": null,
                    "width": 300,
                    "height": 450,
                    "vote_count": 5,
                    "vote_average": 5.19,
                    "file_path": "/9oCxDgiqW8rKEjVjAA6y2aq8vni.jpg",
                    "aspect_ratio": 0.66666666666667
                  },
                  {
                    "iso_639_1": null,
                    "width": 300,
                    "height": 450,
                    "vote_count": 3,
                    "vote_average": 5.18,
                    "file_path": "/enEyZ01Z3PF9uBeDmt8hWJaVbCz.jpg",
                    "aspect_ratio": 0.66666666666667
                  },
                  {
                    "iso_639_1": null,
                    "width": 800,
                    "height": 1200,
                    "vote_count": 6,
                    "vote_average": 5.258,
                    "file_path": "/sVuTm1w5G6ofrx4lRjy64D7MRiS.jpg",
                    "aspect_ratio": 0.66666666666667
                  }
                ],
            actorTaggedImages:[
                  {
                    "iso_639_1": null,
                    "vote_count": 11,
                    "media_type": "movie",
                    "file_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                    "aspect_ratio": 1.7777777777778,
                    "media": {
                      "popularity": 10.907,
                      "vote_count": 2895,
                      "video": false,
                      "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
                      "id": 38575,
                      "adult": false,
                      "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                      "original_language": "en",
                      "original_title": "The Karate Kid",
                      "genre_ids": [
                        28,
                        12,
                        18,
                        10751
                      ],
                      "title": "The Karate Kid",
                      "vote_average": 6.3,
                      "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
                      "release_date": "2010-06-10"
                    },
                    "height": 1080,
                    "vote_average": 5.528,
                    "width": 1920
                  },
                  {
                    "iso_639_1": null,
                    "vote_count": 6,
                    "media_type": "movie",
                    "file_path": "/k2r5n4pI9m5HHPCiSciWQCvO0Q1.jpg",
                    "aspect_ratio": 1.7777777777778,
                    "media": {
                      "popularity": 10.907,
                      "vote_count": 2895,
                      "video": false,
                      "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
                      "id": 38575,
                      "adult": false,
                      "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                      "original_language": "en",
                      "original_title": "The Karate Kid",
                      "genre_ids": [
                        28,
                        12,
                        18,
                        10751
                      ],
                      "title": "The Karate Kid",
                      "vote_average": 6.3,
                      "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
                      "release_date": "2010-06-10"
                    },
                    "height": 1080,
                    "vote_average": 5.522,
                    "width": 1920
                  },
                  {
                    "iso_639_1": null,
                    "vote_count": 6,
                    "media_type": "movie",
                    "file_path": "/5XKSUwrUaxgA45jnksESmNv08ky.jpg",
                    "aspect_ratio": 1.7777777777778,
                    "media": {
                      "popularity": 10.907,
                      "vote_count": 2895,
                      "video": false,
                      "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
                      "id": 38575,
                      "adult": false,
                      "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                      "original_language": "en",
                      "original_title": "The Karate Kid",
                      "genre_ids": [
                        28,
                        12,
                        18,
                        10751
                      ],
                      "title": "The Karate Kid",
                      "vote_average": 6.3,
                      "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
                      "release_date": "2010-06-10"
                    },
                    "height": 1080,
                    "vote_average": 5.494,
                    "width": 1920
                  },
                  {
                    "iso_639_1": null,
                    "vote_count": 5,
                    "media_type": "movie",
                    "file_path": "/rAR5UqaFkJYqOBiDEUmqClPACPE.jpg",
                    "aspect_ratio": 1.7777777777778,
                    "media": {
                      "popularity": 10.907,
                      "vote_count": 2895,
                      "video": false,
                      "poster_path": "/bucxUHJd1DFy15iHzuXSOoFrObW.jpg",
                      "id": 38575,
                      "adult": false,
                      "backdrop_path": "/rfhnEYubWD4hnUUm8xXmotpqffb.jpg",
                      "original_language": "en",
                      "original_title": "The Karate Kid",
                      "genre_ids": [
                        28,
                        12,
                        18,
                        10751
                      ],
                      "title": "The Karate Kid",
                      "vote_average": 6.3,
                      "overview": "12-year-old Dre Parker could have been the most popular kid in Detroit, but his mother's latest career move has landed him in China. Dre immediately falls for his classmate Mei Ying but the cultural differences make such a friendship impossible. Even worse, Dre's feelings make him an enemy of the class bully, Cheng. With no friends in a strange land, Dre has nowhere to turn but maintenance man Mr. Han, who is a kung fu master. As Han teaches Dre that kung fu is not about punches and parries, but maturity and calm, Dre realizes that facing down the bullies will be the fight of his life.",
                      "release_date": "2010-06-10"
                    },
                    "height": 1080,
                    "vote_average": 5.462,
                    "width": 1920
                  }]
        };
    }

    
    render() {
        let trendingMoviesImage = [];
        let trendingMoviesImage1 = [];


let image = this.state.actorPictures.reduce(function (acc, x) {
    trendingMoviesImage.push(x.file_path);
    return (acc);
}, [])
      const datacarousel = this.state.actorTaggedImages.map( img=>{
          trendingMoviesImage1.push(img.media.backdrop_path)
          img.media.backdrop_path}
          )
      
        return (
            <ScrollView style={styles.container}>
                <Carousel image={trendingMoviesImage}/>
                <View style={styles.actorProfile}>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w200${this.state.actorDetails.profile_path}` }}
                        style={styles.actorProfileImage}
                    />
                    <View style={styles.actorDetails}>
                        <Text style={[styles.actorDetailsItem, styles.actorName]} >{this.props.navigation.state.params.name}</Text>
                        <Text style={styles.actorDetailsItem}>{this.state.actorDetails.birthday}</Text>
                        <Text style={styles.actorDetailsItem}>{this.state.actorDetails.place_of_birth}</Text>
                        <Text style={styles.actorDetailsItem}>{this.state.actorDetails.popularity}</Text>
                    </View>
                </View>
                <View style={styles.movieList}>
                    <Text style={styles.movieListTitle}>Filmography</Text>
                    <ScrollView style={styles.movieListPosters}  horizontal={true}>
                        {
                            this.state.actorMovies.map(movie => {
                                return <View key={movie.id}>
                                    <Image
                                        source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
                                        style={styles.moviePoster}
                                    />
                                    <Text style={styles.moviePosterTitle}>{movie.original_title}</Text>
                                </View>
                            })
                        }
                    </ScrollView>
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
                            {key: this.state.actorDetails.birthday},
                            {key: this.state.actorDetails.place_of_birth},
                            {key: this.state.actorDetails.popularity},
                            {key: this.state.actorDetails.homepage},
                        ]}
                        renderItem={({item}) => 
                            <Text style={styles.actorPersonalDetailsList}>{item.key.toString()}</Text>
                        }
                        keyExtractor={(item) => item.toString()}
                    />
                    </View>
                    <View style={styles.actorPersonalDetailsBiography}>
                        <Text style={styles.actorPersonalDetailsBiographyTitle}>Biography</Text>
                        <Text style={styles.actorPersonalDetailsBiographyContent}>{this.state.actorDetails.biography}</Text>
                    </View>
                <Carousel image={trendingMoviesImage1}/>

                </View>
            </ScrollView>
        )
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

export default ActorProfile;
