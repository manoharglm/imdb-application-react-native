import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { topTv } from '../store/actions';
import { connect } from 'react-redux';
import CarouselPage from './CarouselPage';

class TopTv extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.topTv()
    }
    render() {
        const { Tv, Trending } = this.props
        if (Tv) {
            return (
                <View>
                    <CarouselPage image={Tv.map(tv => tv['backdrop_path'])} />
                    <ScrollView style={{ margin : 8}}>
                    <Text style={{color : "white", fontSize : 20}}>Trending TV</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    
                        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
                            {Trending.map(tv => {
                                return <View key={tv.id} style={{ margin: 12 }} >
                                    <Image style={{ width: 100, height: 100 }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w200/${tv['poster_path']}` }} />
                                    <Text style={{ color: "white" }}>{tv['name']}</Text>
                                    <Text style={{ color: "grey" }}>Rating : {tv['vote_average']}</Text>
                                </View>
                            })}
                        </View>
                    </ScrollView>
                    <Text style={{color : "white", fontSize : 20}}>Top Rated TV</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
                            {Tv.map(tv => {
                                return <View key={tv.id} style={{ margin: 12 }} >
                                    <Image style={{ width: 100, height: 100 }}
                                        source={{ uri: `https://image.tmdb.org/t/p/w200/${tv['poster_path']}` }} />
                                    <Text style={{ color: "white" }}>{tv['name']}</Text>
                                    <Text style={{ color: "grey" }}>Rating : {tv['vote_average']}</Text>
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
    Tv: state.top.tv,
    Trending : state.trendingData.trendingTv
})
const mapDispatchToProps = () => dispatch => ({
    topTv: () => dispatch(topTv())
})
export default connect(mapStateToProps, mapDispatchToProps)(TopTv)