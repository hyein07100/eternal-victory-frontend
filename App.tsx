import { Button, ButtonText } from './components/Button';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button>
        <ButtonText>Click Me</ButtonText>
      </Button>
    </View>
  );
}
