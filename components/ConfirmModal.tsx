import {
  Center,
  ButtonText,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Icon,
  CloseIcon,
  TrashIcon,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Text,
} from "@gluestack-ui/themed";
import { Heading } from "lucide-react-native";
import { useState, useRef, ReactElement, ReactNode } from "react";

interface IConfirmModal {
  text?: string;
  header?: string;
  submit?: {
    label?: string;
    action?: () => void;
    loading?: boolean;
    data?: boolean;
  };
  cancel?: { label?: string; action?: () => void };
  button?: { label?: string; icon?: ReactElement };
  confirm?: {
    button?: {
      label?: string;
      action?: () => void;
    };
    text?: string;
  };
}

const ConfirmModal = ({
  text,
  header,
  submit,
  cancel,
  confirm,
}: IConfirmModal) => {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);

  const modalContent = submit?.data ? (
    <>
      {text && (
        <ModalBody>
          <Text>{confirm?.text}</Text>
        </ModalBody>
      )}
      <ModalFooter>
        {submit && (
          <Button
            size="sm"
            action="positive"
            mr="$3"
            onPress={confirm?.button?.action}
          >
            <ButtonText>{confirm?.button?.label}</ButtonText>
          </Button>
        )}
        {cancel && (
          <Button
            size="sm"
            action="secondary"
            borderWidth="$0"
            onPress={() => {
              cancel.action || setShowModal(false);
            }}
          >
            <ButtonText>{cancel.label}</ButtonText>
          </Button>
        )}
      </ModalFooter>
    </>
  ) : (
    <>
      <ModalHeader>
        {header && <Heading>{header}</Heading>}
        <ModalCloseButton>
          <Icon as={CloseIcon} />
        </ModalCloseButton>
      </ModalHeader>
      {text && (
        <ModalBody>
          <Text>{text}</Text>
        </ModalBody>
      )}
      <ModalFooter>
        {submit && (
          <Button
            size="sm"
            action="positive"
            mr="$3"
            onPress={submit.action}
            disabled={submit.loading}
          >
            <ButtonText>
              {submit.loading ? "One moment..." : submit.label}
            </ButtonText>
          </Button>
        )}
        {cancel && (
          <Button
            size="sm"
            action="secondary"
            borderWidth="$0"
            onPress={() => {
              cancel.action || setShowModal(false);
            }}
          >
            <ButtonText>{cancel.label}</ButtonText>
          </Button>
        )}
      </ModalFooter>
    </>
  );

  return (
    <Center>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <Icon as={TrashIcon} m="$2" w="$4" h="$4" />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>{modalContent}</ModalContent>
      </Modal>
    </Center>
  );
};

export default ConfirmModal;
