import { Center, Spinner } from "@gluestack-ui/themed";

interface ILoading {
  isLoading?: boolean;
  children?: any;
}

const LoadingWrapper = ({ isLoading, children }: ILoading) => {
  if (isLoading) {
    return (
      <Center flex={1}>
        <Spinner size="large" />
      </Center>
    );
  }
  return children;
};

export default LoadingWrapper;
