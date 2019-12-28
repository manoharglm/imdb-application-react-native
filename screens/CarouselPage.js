import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import {
    View,
    Dimensions,
    ImageBackground,
    Text,
    ActivityIndicator,
    StyleSheet
} from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 200;

function CarouselPage(props) {

    let renderPage = (image, index) => {
        return (
            <View key={index}>
                <ImageBackground key={index + 100}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
                    style={{
                        height: BannerHeight,
                        width: BannerWidth,
                        position: 'relative', // because it's parent
                        top: 2,
                        left: 2
                    }}
                >
                    {(props.data) ?
    
                        (props.data[index].original_title) ?
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    position: 'absolute', // child
                                    bottom: 0, // position where you want
                                    backgroundColor: 'rgba(0,0,0,0.2)',
                                    padding: 20,
                                    width: '100%'
                                }}
                            >
                                {props.data[index].original_title}
                            </Text>
    
                            :
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    color: 'white',
                                    position: 'absolute', // child
                                    bottom: 30, // position where you want
                                    left: 10,
                                    backgroundColor: 'gray',
                                    padding: 10,
                                    opacity: .8
                                }}
                            >
                                {props.data[index].name}
                            </Text>
                        : <Text></Text>
    
                    }
    
                </ImageBackground>
    
            </View>
        );
    }

    if (props.image) {
        return (
            <Carousel
                autoplay
                autoplayTimeout={3000}
                loop
                index={0}
                pageSize={BannerWidth}
            >

                {props.image.map((image, index) => renderPage(image, index))}
            </Carousel>
        );
    } else {
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

export default React.memo(CarouselPage);