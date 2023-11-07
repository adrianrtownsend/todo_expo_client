import {
  Center,
  Text,
  Box,
  Button,
  ButtonText,
  ScrollView,
  VStack,
} from "@gluestack-ui/themed";

const ContainerWrapper = ({children}) => {
  return (
    <Center flex={1}>
    <VStack width="$full">
    {children}
    </VStack>
    </Center>
  )
}

export default ContainerWrapper