import React, {MouseEventHandler, useEffect, useRef, useState} from 'react';
import './App.css';
import {Center, IconButton, SimpleGrid, Tooltip} from "@chakra-ui/react";
import {UrlItem} from "./models/UrlItem";
import UrlMenuItem from './collections/urlitem/UrlMenuItem';
import {ViewIcon} from "@chakra-ui/icons";

const urlItems: UrlItem[] = [
	{url: "http://google.com", linkText: "google"},
	{url: "http://facebook.com", linkText: "fb"},
	{url: "http://instagram.com", linkText: "ig"},
]

function App() {
	let [url, setUrl] = useState<string | undefined>();
	let containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		containerRef?.current?.focus();

		const queryInfo = {active: true, lastFocusedWindow: true};

		chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
			const url = tabs[0].url;
			setUrl(url);
		});
	}, []);

	const openAll: MouseEventHandler<HTMLButtonElement> = (e ) => {
		urlItems.forEach((item,index) => {
			e.preventDefault();
			window.open(`${item.url}`, `item-${index}`);
		})
	}


	return (
		<SimpleGrid p={2} spacingY={2} bgColor="gray.300" ref={containerRef}
		            borderRadius={1}>
			<SimpleGrid columns={3} spacingX={2}>
				<Center>
					<Tooltip label="Open All" fontSize="xs">
						<IconButton aria-label="Create" icon={<ViewIcon/>} w="100%" borderRadius={2} height={10} onClick={openAll}/>
					</Tooltip>
				</Center>
				{/*	<Center>*/}
				{/*		<IconButton aria-label="Create" icon={<AddIcon />} w="100%" borderRadius={2}  height={10}/>*/}
				{/*	</Center>*/}
				{/*	<Center>*/}
				{/*		<Tooltip label={"Get Some Sleep"} fontSize="xs">*/}
				{/*			<IconButton aria-label="Create" icon={<MoonIcon />} w="100%" borderRadius={2} height={10}/>*/}
				{/*		</Tooltip>*/}
				{/*	</Center>*/}
				{/*	<Center>*/}
				{/*		<IconButton aria-label="Create" icon={<DeleteIcon />} w="100%" borderRadius={2} height={10}/>*/}
				{/*	</Center>*/}
			</SimpleGrid>
			<SimpleGrid spacingY={2}>
				{
					urlItems.map((item, index) => <UrlMenuItem key={index} item={item} keys={`${index + 1}`}/>)
				}
				{/*<Link isExternal href={"#"} onKeyDown={event => console.log(event)}>*/}
				{/*	<Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>*/}
				{/*		<HStack>*/}
				{/*			<Text>idk</Text>*/}
				{/*			<Kbd bgColor="gray.700">1</Kbd>*/}
				{/*		</HStack>*/}
				{/*	</Center>*/}
				{/*</Link>*/}
				{/*<Center bg="gray.700" color="gray.200" height={10} borderRadius={2} >*/}
				{/*	<HStack>*/}
				{/*		<AddIcon/>*/}
				{/*		<Text>idk</Text>*/}
				{/*	</HStack>*/}
				{/*</Center>*/}
				{/*<Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>*/}
				{/*	<HStack>*/}
				{/*		<InfoIcon/>*/}
				{/*		<Text>Dev : Demirkiranlar</Text>*/}
				{/*	</HStack>*/}
				{/*</Center>*/}
				{/*<Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>*/}
				{/*	<HStack>*/}
				{/*		<ArrowRightIcon/>*/}
				{/*		<Text>idk</Text>*/}
				{/*	</HStack>*/}
				{/*</Center>*/}
				{/*<Center bg="gray.700" color="gray.200" height={10} borderRadius={2}>*/}
				{/*	<HStack>*/}
				{/*		<AddIcon/>*/}
				{/*		<Text>idk</Text>*/}
				{/*	</HStack>*/}
				{/*</Center>*/}
			</SimpleGrid>
		</SimpleGrid>
	);
}

export default App;
