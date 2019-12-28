import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

function CastCard(props) {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {props.data.map(data => {
                    return <TouchableOpacity style={styles.card} key={data.id}
                        onPress={
                            () => props.onCardClick.navigate('ActorProfile', {
                                detailValue: data.id,
                                typeOfData: (data.original_title !== undefined) ? "movie" : "tv"
                            })
                        }
                    >
                        <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w200/${data['profile_path']}` }} />
                        <Text style={styles.baseText}> {data.name} </Text>
                        <Text style={styles.subText}> {data.character} </Text>
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
        padding: 3,
        color: 'white',
        fontSize: 16,
        height: 40
    },
    subText: {
        padding: 3,
        color: 'gray',
        fontSize: 16,
        height: 40
    },
    text: {
        padding: 10,
        color: 'white',
        fontSize: 16,
    }
});

export default React.memo(CastCard);