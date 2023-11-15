import { Center, Spinner } from "@gluestack-ui/themed";

const Loading = () => {
  return (
    <Center flex={1}>
      <Spinner size="large" />
    </Center>
  );
};

export default Loading;
