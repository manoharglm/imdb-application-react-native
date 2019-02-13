import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text
} from 'react-native';


class Card extends Component {
    state = {}
    render() {
        return (

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this.props.data.map(tv => {
                        return <View style={styles.card} key={tv.id}>
                            <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w500/${tv['poster_path']}` }} />
                            {
                                (tv.original_title !== undefined) ? <Text style={styles.baseText}> {tv.original_title} </Text> : <Text style={styles.baseText}>{tv.name}</Text>
                            }
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Image style={{ width: 25, height: 25, margin:4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                                <Text  style={styles.text}>{tv.vote_average}</Text>
                            </View>
                           
                        </View>
                    })}
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        borderRadius: 5,
        margin: 10,
        color: 'white',
        backgroundColor: '#282828'
    },
    baseText: {
        padding: 10,
        color: 'white',
        fontSize: 16,
        height: 80

    },
    text:{
         padding: 10,
        color: 'white',
        fontSize: 16,
    }
});

export default Card;