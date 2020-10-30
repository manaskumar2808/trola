import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { TabView,TabBar,SceneMap,TabBarIndicator } from 'react-native-tab-view';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Icon,Button } from 'react-native-elements';

import Colors from '../constants/Colors';

const Posts = props => (
    <View style={styles.fallBackContent}>
        <View style={styles.fallBackView}>
            <View style={styles.fallBackTitleContainer}>
                <Text style={styles.fallBackTitle}>Profile</Text>
            </View>
            <View style={styles.fallBackTextContainer}>
                <Text style={styles.fallBackText}>
                    When you share photoes and videos they'll appear on your profile
                </Text>
            </View>
            <Button 
                type="clear"
                title="Share your first photo or video"
                titleStyle={{color: Colors.primary,fontSize: 14}}
            />
        </View>
    </View>
);


const Tags = props => (
    <View style={styles.fallBackContent}>
        <View style={styles.fallBackView}>
            <View style={styles.fallBackTitleContainer}>
                <Text style={styles.fallBackTitle}>Photoes and Videos of You</Text>
            </View>
            <View style={styles.fallBackTextContainer}>
                <Text style={styles.fallBackText}>
                    When people tag you in the photoes and videos they'll appear here
                </Text>
            </View>
        </View>
    </View>
);


const InitialLayout = props => (
    <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text style={{color: "#fff"}}>initial</Text>
    </View>
);

const Indicator = props => {
    return (
        <TabBarIndicator 
            {...props}

            style={styles.indicator} 
        />
    );
}


const TabBarTile = props => {
    const tabStyles = [styles.tabStyle];
    return (
        <TabBar 
            {...props}
            activeColor="#fff"
            inactiveColor="#9a989c"
            renderIcon={iconInfo => (
                // <MaterialCommunityIcons name="grid" size={24} color={iconInfo.focused ? "#fff" : "#9a989c"} />
                <Icon 
                    name={iconInfo.route.icon}
                    color={iconInfo.focused ? "#fff" : "#9a989c"}
                    size={24}
                />
            )}
            renderLabel={() => {}}
            renderIndicator={(props) => <Indicator {...props} />}
            tabStyle={{...styles.tabStyle}}
        />
    );
}


const ProfileTabs = props => {
    const [index, setIndex] = useState(0);

    const routes = [
        {
            key: "posts",
            title: "Posts",
            icon: "grid-on",
        },
        {
            key: "tags",
            title: "Tags",
            icon: "tag-faces",
        }
    ];


    const renderItems = SceneMap({
        posts: Posts,
        tags: Tags,
    });

    return (
        <TabView 
            navigationState={{index,routes}}
            renderTabBar={props => <TabBarTile {...props} />}
            initialLayout={InitialLayout}
            renderScene={renderItems}
            onIndexChange={setIndex}
        />
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    tabStyle: {
        backgroundColor: Colors.background,
        borderBottomColor: "#fff",
        borderBottomWidth: 0.25,
    },
    indicator: {
        color: "#fff",
    },
    fallBackContent: {
        paddingTop: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    fallBackView: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    fallBackTitleContainer: {
        marginBottom: 10,
        width: "80%",
    },
    fallBackTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
    },
    fallBackTextContainer: {
       textAlign: "justify",
    },
    fallBackText: {
        color: "#9a989c",
        fontSize: 14,
        textAlign: "center",
        marginBottom: 10,
    }
});

export default ProfileTabs;