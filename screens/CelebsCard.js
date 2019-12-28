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
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row' }}>

                {props.data.map(tv => {
                    return <TouchableOpacity key={tv.id + 1000}
                        onPress={
                            () => props.onCardClick.navigate('ActorProfile', {
                                detailValue: tv.id,
                                typeOfData: (tv.original_title !== undefined) ? "movie" : "tv"
                            })
                        } >
                        <View style={styles.card} key={tv.id}>
                            <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w500/${tv['profile_path']}` }} />
                            <Text style={styles.baseText}> {tv.name} </Text>
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
        height: 80

    }
});

export default React.memo(Card);