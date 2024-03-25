import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function App() {
  const [image, setImage] = useState(null);
  const pickeImage = async () => {
    let resoult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.mediaTypes.All,
      aspect: [4, 3],
      quality: 1,
    })
    if(!resoult.canceled){
      setImage(resoult.assets[0].ui);
    }
  };


  }


  return;
  <View accessible></View>;
