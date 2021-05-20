import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Home from "../Screens/Home"
import Settings from "../Screens/Setting"
import TaskDetailScreen from "../Screens/TaskInfo"

const screens = {
    Home : {
        screen : Home,
        navigationOptions : {
            // headerShown: false,
        }
    },
    Settings : {
        screen : Settings,
        navigationOptions: {
            headerShown: false,
        }
    }, TaskDetail : {
        screen : TaskDetailScreen,
        navigationOptions: {
            headerShown: false,
        }
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)