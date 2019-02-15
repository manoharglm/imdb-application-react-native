import React, { Component } from 'react';
import Carousel from 'react-native-banner-carousel';
import {
    View,
    Dimensions,
    ImageBackground,
    Text
} from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 250;




class CarouselPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    renderPage(image, index) {
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
                    {(this.props.data) ?

                        (this.props.data[index].original_title) ?
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
                                {this.props.data[index].original_title}
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
                                {this.props.data[index].name}
                            </Text>
                        : <Text></Text>

                    }

                </ImageBackground>

            </View>
        );
    }
    render() {

        if (this.props.image) {

            return (
                <Carousel
                    autoplay
                    autoplayTimeout={3000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >

                    {this.props.image.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            );
        } else {
            return <Text>Arun</Text>
        }
    }
}

export default CarouselPage;