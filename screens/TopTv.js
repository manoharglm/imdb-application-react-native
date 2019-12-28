import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { topTv } from '../store/actions';
import { connect } from 'react-redux';
import CarouselPage from './CarouselPage';
import Card from './Card';

class TopTv extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    static navigationOptions = {
        header: null
    }
    componentDidMount() {
        this.props.topTv()
    }
    render() {
        const { Tv, Trending } = this.props
        if (Tv) {
            return (

                <View style={styles.container}>
                    <View style={styles.images}>
                        < Image
                            style={
                                {
                                    width: 100,
                                    height: 50,
                                    margin: 5,
                                    marginLeft: 10
                                }
                            }
                            source={
                                {
                                    uri: 'https://londonfeministfilmfestival.files.wordpress.com/2017/05/imdb-logo.png'
                                }
                            }
                        />
                        < TouchableOpacity onPress={
                            () => this.props.navigation.navigate('UserDetailsPage', {
                                detailValue: "tv.id",
                                typeOfData: "movie"

                            })
                        } >
                            < Image
                                style={
                                    {
                                        width: 50,
                                        height: 50,
                                        padding: 10,
                                        margin: 5,
                                        marginRight: 10

                                    }
                                }
                                source={
                                    {
                                        uri: 'https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png'
                                    }
                                }
                            />
                        </TouchableOpacity>

                    </View>
                    <ScrollView>
                        <CarouselPage image={Tv.map(tv => tv['backdrop_path'])} />
                        <Text style={{ color: "white", fontSize: 20 }}>Trending TV</Text>
                        <Card data={Trending} onCardClick={this.props.navigation} />
                        <Text style={{ color: "white", fontSize: 20 }}>Top Rated TV</Text>
                        <Card data={Tv} onCardClick={this.props.navigation} />
                    </ScrollView>
                </View>
            )
        }
        else return <View style={styles.load}>
            <ActivityIndicator size={50} color="#ffd700" />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1C1C',
        flex: 1,
        justifyContent: "center"

    },
    textArea: {
        marginTop: 20,
        marginLeft: 20,
        color: 'white',
        fontSize: 20
    },
    card: {
        padding: 10

    }, load: {
        backgroundColor: '#1E1C1C',
        height: "100%",

        //  flex: 1,
        justifyContent: "center",
        alignItems: "center"


    },
    images: {
        // flex:1,
        justifyContent: 'space-between',
        flexDirection: "row"
    }
});

const mapStateToProps = state => ({
    Tv: state.top.tv,
    Trending: state.trendingData.trendingTv
})
const mapDispatchToProps = () => dispatch => ({
    topTv: () => dispatch(topTv())
})
export default connect(mapStateToProps, mapDispatchToProps)(TopTv)