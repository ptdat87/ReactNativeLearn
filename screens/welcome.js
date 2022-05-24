import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { images, icons } from '../constants'
import { UIButton } from '../components'

function welcome(props) {
    //state => when state is change => UI is reloaded
    //like getter/setter
    const [accountTypes, setAccountType] = useState([
        {
            name: 'Influencer',
            isSelected: true
        },
        {
            name: 'Business',
            isSelected: false
        },
        {
            name: 'Individual',
            isSelected: false
        }
    ])

    return <View style={{
        backgroundColor: 'while',
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                flex: 100,
            }}
        >
            <View style={{
                flexDirection: 'row',
                flex: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flex: 1
                }}>
                    <Image source={icons.fire}
                        style={{
                            width: 30,
                            height: 30,
                            marginStart: 10,
                            marginEnd: 5
                        }}
                    />
                    <Text style={{
                        color: 'white'
                    }}> YourCompany.CO</Text>
                    <View style={{ flex: 1 }}>

                    </View>
                    <Icon name = {''}></Icon>
                </View>

            </View>
            <View style={{
                flex: 20,
                width: '100%',
                // backgroundColor: 'purple',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: 12
                }}> Welcome to</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontWeight: 'bold'
                }}> YourCompany.CO</Text>
                <Text style={{
                    marginBottom: 7,
                    color: 'white',
                    fontSize: 12
                }}> Please select your account type</Text>
            </View>

            <View style={{
                flex: 40,
                // backgroundColor: 'purple'
            }}>
                {accountTypes.map(accountType =>
                    <UIButton onPress={() => {
                        setAccountType(accountTypes.map(x => {
                            return { ...x, isSelected: x.name == accountType.name }
                        }));
                    }}
                        title={accountType.name}
                        isSelected={accountType.isSelected}
                    >
                    </UIButton>
                )}
            </View>

            <View style={{
                flex: 20,
                // backgroundColor: 'green'
            }}>

            </View>
        </ImageBackground>
    </View>
        ;
}

export default welcome;
