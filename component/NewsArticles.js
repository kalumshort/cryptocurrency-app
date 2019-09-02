// importing react
import React, { Component } from 'react';

// importing react native packages
import { 
         View,
         Text, 
         TouchableHighlight, 
         StyleSheet, 
         FlatList, 
         ImageBackground, 
         Dimensions, 
        } 
         from 'react-native';

class NewsArticles extends Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);

    }

    keyExtractor(item, index) {
        return `${index}`;
    }

    renderSeperator() {
        const style = {height: 1, backgroundColour:'black'};
        return <View style={style} />
    }

    renderItem({item}) {
        const handlePress = () => {
            this.props.onItemPress(item);
        }
        const source = {uri: item.imageurl}
        return (
            <View>
                <TouchableHighlight
                 onPress={ handlePress }
                 >
                    <>
                        <View style={ styles.newsBox }>
                            <ImageBackground source={ source } style={ styles.picture }>
                                <View style={styles.imageOverlay}>
                                    <Text style={ styles.newsTitle }>{ item.title }</Text>
                                    <Text style={ styles.newsSource }>{ item.source }</Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </>
                </TouchableHighlight>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.newsArticles}
                keyExtractor={this.keyExtractor}
                // ItemSeparatorComponent={this.renderSeperator}
                renderItem={this.renderItem}
            />
        );
    }
}

export default NewsArticles;

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    contactContainer: {
        padding: 0,
        margin: 0,
    },
    picture: {
        height: 200, 
        width: WIDTH*1,
        marginBottom: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    newsBox: {
        backgroundColor: '#303030',
    },
    imageOverlay: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,.6)',
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    newsTitle: {
        fontSize: 22,
        color: 'white',
        // fontStyle: 'italic',
        fontWeight: '300',
    },
    newsSource: {
        fontSize:15,
        color:'white',
        fontStyle: 'italic',
        fontWeight: '100',
    },
    Text: {
        fontSize: 18,
        margin: 5,
    },
    title: {
        fontWeight: 'bold',
    },
});
