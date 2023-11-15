import { useMutation } from "@apollo/client";
import { Pressable, Icon } from "@gluestack-ui/themed";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { CheckCircle2 } from "lucide-react-native";

import { UPDATE_TODO_ISCOMPLETED } from "../graphql";

interface CompleteProps {
  id: number;
  isChecked: boolean;
  onCheck?: () => void;
  isChangingCheck?: boolean;
}

const Complete = ({
  id,
  isChecked = false,
  isChangingCheck,
}: CompleteProps) => {
  const [updateTodoIsCompleted] = useMutation(UPDATE_TODO_ISCOMPLETED);

  const onCheck = () => {
    updateTodoIsCompleted({
      variables: {
        id,
        isCompleted: !isChecked,
      },
    });
  };

  return (
    <>
      <Pressable
        onPress={() => {
          if (isChangingCheck) return;
          onCheck();
        }}
        disabled={isChangingCheck}
        position="absolute"
        top={12}
        right={16}
        h="$6"
        w="$6"
        padding="$4"
        justifyContent="center"
        alignItems="center"
      >
        <AnimatePresence>
          <Motion.View
            key={isChecked ? "checked" : "unchecked"}
            initial={{
              scale: 1.3,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0.9,
            }}
            transition={{
              type: "spring",
              mass: 0.9,
              damping: 9,
              stiffness: 300,
            }}
            style={{
              position: "absolute",
            }}
          >
            <Icon
              as={CheckCircle2}
              size="xl"
              color={isChecked ? "white" : "white"}
              fill={isChecked ? "$green300" : "$gray300"}
            />
          </Motion.View>
        </AnimatePresence>
      </Pressable>
    </>
  );
};

export default Complete;
