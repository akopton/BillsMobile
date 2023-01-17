import { View, Text } from "react-native"

export const CategoryPage = ({route}:any) => {

    const {props} = route.params

    return (
        <View>
            <Text>
                {props.name}
            </Text>
        </View>
    )
}