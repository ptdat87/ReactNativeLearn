import React from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

function UIButton(props) {
    const {onPress, title, isSelected} = props

    return <TouchableOpacity
        onPress= {onPress}

        style={{
            borderColor: 'white',
            borderWidth: 1,
            height: 45,
            borderRadius: 5,
            marginHorizontal: 15,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isSelected == true ? 'white': null
        }}>
        {isSelected && <Icon
            size={20}
            name={"check-circle"}
            style={{
                color: 'green',
                position: 'absolute',
                top: 10,
                left: 10,
            }} />}

        <Text style={{
            color: isSelected == true ? '#F57A1C': 'white',
            fontWeight: 'bold'
        }}> {title}</Text>
    </TouchableOpacity>
}

export default UIButton