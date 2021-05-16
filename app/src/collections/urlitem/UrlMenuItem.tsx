import { UrlItem } from "../../models/UrlItem";
import {
	Center,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Kbd,
	Link,
	Modal,
	ModalContent,
	ModalOverlay,
	SimpleGrid,
	Text,
	useDisclosure,
	VStack
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { FocusableElement } from "@chakra-ui/utils";

interface UrlItemProps {
	item: UrlItem,
	keys: string
}

function UrlMenuItem({ item, keys }: UrlItemProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	useHotkeys(`e+${keys}`, (event) => {
		onOpen();
	}, { filterPreventDefault: true });

	useHotkeys(keys, () => {
		if (isOpen) {
			return;
		}
		window.open(item.url, "_blank");
	}, { filterPreventDefault: true }, [isOpen]);

	return (
		<>
			<Link isExternal href={item.url}>
				<Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>
					<HStack>
						<Text>{`${item.linkText}`}</Text>
						<Kbd bgColor="gray.700">{`${keys}`}</Kbd>
					</HStack>
				</Center>
			</Link>
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent>
					<SimpleGrid p={2} spacingY={2} borderRadius={1}>
						<FormControl id="url">
							<FormLabel>Url</FormLabel>
							<Input defaultValue={item.url} />
						</FormControl>
						<FormControl id="text">
							<FormLabel>Item Text</FormLabel>
							<Input defaultValue={item.linkText} />
						</FormControl>
					</SimpleGrid>
				</ModalContent>
			</Modal>
		</>
	)
}

export default UrlMenuItem;
