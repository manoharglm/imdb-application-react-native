import React,{Component} from 'react';
import Carousel from 'react-native-banner-carousel';
import {
    Image,
    View,
    Dimensions,
    Text
} from 'react-native';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;


// const images = [
//     "http://aboutreact.com/wp-content/uploads/2018/08/train_ticket_booking.png",
//     "http://aboutreact.com/wp-content/uploads/2018/08/bus_ticket_booking.png",
//     "http://aboutreact.com/wp-content/uploads/2018/08/best_deals1.png",
//     "http://aboutreact.com/wp-content/uploads/2018/08/discount1.png",
//     "https://theeastvision.info/wp-content/uploads/2018/04/black-panther.jpg",
//     "http://aboutreact.com/wp-content/uploads/2018/08/flight_ticket_booking.png",
//     "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
//     "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
//     "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
// ];


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