import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';



class Card2 extends Component {
    state = {}
    render() {
        return (

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this.props.data.sort((a,b) => b.vote_average -a.vote_average ).map(data => {
                        
                        return  <TouchableOpacity 
                                    style={styles.card} 
                                    key={data.id}
                                    onPress = {
                                        () => this.props.onCardClick.navigate('SecondPage', {
                                            id: data.id,
                                            type: (data.original_title !== undefined) ? "movie" : "tv",
                                            onCardClick: this.props.onCardClick
                                        })
                                    }>
                            <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w200/${data['poster_path']}` }} />
                             <Text style={styles.baseText}> {data.original_title} </Text>
                            <View style={{flex:1,flexDirection:"row"}}>
                                <Image style={{ width: 25, height: 25, margin:4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                                <Text  style={styles.text}>{data.vote_average}</Text>
                            </View>
                        </TouchableOpacity>
                       
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

export default Card2;