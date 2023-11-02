import { Pressable, Icon } from "@gluestack-ui/themed";
import { AnimatePresence, Motion } from "@legendapp/motion";
import { CheckCircle2 } from "lucide-react-native";
import { useState } from "react";

interface CompleteProps {
  isChecked?: boolean;
}

const Complete = ({ isChecked = false }: CompleteProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Pressable
        onPress={() => {
          setChecked(!checked);
        }}
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
            key={checked ? "checked" : "unchecked"}
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
              color={checked ? "white" : "white"}
              fill={checked ? "green" : "gray"}
            />
          </Motion.View>
        </AnimatePresence>
      </Pressable>
    </>
  );
};

export default Complete;
