import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

function Card(props) {
    return (
        <ScrollView testID ={props.testID} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {props.data.map((data, index) => {
                    return <TouchableOpacity key={data.id + 1000}
                        onPress={
                            () => props.onCardClick.navigate('SecondPage', {
                                id: data.id,
                                type: (data.original_title !== undefined) ? "movie" : "tv",
                                onCardClick: props.onCardClick

                            })
                        }
                        testID={`${props.testID}_${index}`}
                    >
                        <View style={styles.card} key={data.id}>
                            <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w500/${data['poster_path']}` }} />
                            {
                                (data.original_title !== undefined)
                                    ? <Text
                                        style={styles.baseText}
                                        numberOfLines={1}
                                    > {data.original_title} </Text>
                                    : <Text style={styles.baseText}>{data.name}</Text>
                            }
                            <View style={{ flex: 1, flexDirection: "row" }}>
                                <Image style={{ width: 25, height: 25, margin: 4 }} source={{ uri: `https://cdn3.iconfinder.com/data/icons/basic-flat-svg/512/svg06-512.png` }} />
                                <Text style={styles.text}>{data.vote_average}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>

                })}
            </View>
        </ScrollView>


    );
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
        height: 40,
    },
    text: {
        padding: 10,
        color: 'white',
        fontSize: 16,
    }
});

export default React.memo(Card);