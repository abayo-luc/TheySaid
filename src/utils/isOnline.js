import NetInfo from "@react-native-community/netinfo";

export default () => NetInfo.fetch().then(state => ["wifi", "cellular"].includes(state.type) && state.isConnected);
