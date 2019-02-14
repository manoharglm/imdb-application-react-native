import React,{Component} from 'react';
import Carousel from 'react-native-banner-carousel';
import {
    Image,
    View,
    Dimensions,
    Text
} from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 240;


class CarouselPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{  uri: `https://image.tmdb.org/t/p/w500${image}` }} />
            </View>
        );
    }
    render() {

        if (this.props.image){

        return (
            <Carousel
                autoplay
                autoplayTimeout={2000}
                loop
                index={0}
                pageSize={BannerWidth}
            >
            
                {this.props.image.map((image, index) => this.renderPage(image, index))}
            </Carousel>
        );}else{
            return <Text>Arun</Text>
        }
    }
}

export default CarouselPage;