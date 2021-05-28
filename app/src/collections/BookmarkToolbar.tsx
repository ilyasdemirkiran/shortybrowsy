import React, {useMemo} from "react";
import {AbsoluteCenterProps, Divider, Grid, GridItem} from "@chakra-ui/react";
import {useHistory} from "react-router";
import {Center, HStack, Text} from "@chakra-ui/layout";
import {useHotkeys} from "react-hotkeys-hook";
import {Mode, useAppContext} from "../App";
import {AiOutlineDelete, BiDoorOpen, FiEdit3, IoLocationOutline} from "react-icons/all";

export interface BookmarkToolbarProps {
	bookmarkId: string | null | undefined
	parentId: string | null | undefined,
	bookmarkTitle: string | null | undefined,
}

const ModeButton = () => {
	let {mode} = useAppContext();
	const iconSize = 24;

	return (
		<HStack>
			{mode === Mode.OPEN && <BiDoorOpen size={iconSize}/>}
			{mode === Mode.EDIT && <FiEdit3 size={iconSize}/>}
			{mode === Mode.DELETE && <AiOutlineDelete size={iconSize}/>}
			<Text>{mode}</Text>
		</HStack>
	)
}

function BookmarkToolbar({bookmarkId, parentId, bookmarkTitle}: BookmarkToolbarProps) {
	const toParent = useMemo(() => (bookmarkId) ? `/${parentId || ""}` : "/", [bookmarkId, parentId]);
	let {mode, updateMode} = useAppContext();
	let history = useHistory();

	useHotkeys(
		"backspace",
		() => {
			parentId && history.push(toParent)
		},
		{filterPreventDefault: true}, [mode, updateMode, bookmarkId, parentId, toParent]
	);

	useHotkeys("h",
		() => {
			parentId && history.push("/")
		},
		{filterPreventDefault: true}, [mode, updateMode, bookmarkId, parentId]
	);

	// These are for the later versions
	// useHotkeys("o", () => updateMode(Mode.OPEN),
	// 	{filterPreventDefault: true}, [mode, updateMode, bookmarkId, parentId]
	// );
	//
	// useHotkeys("e", () => updateMode(Mode.EDIT),
	// 	{filterPreventDefault: true}, [mode, updateMode, bookmarkId, parentId]
	// );
	//
	// useHotkeys("d", () => updateMode(Mode.DELETE),
	// 	{filterPreventDefault: true}, [mode, updateMode, bookmarkId, parentId]
	// );

	return (
		<>
			<Grid templateColumns="repeat(3, 1fr)" gap={2} w="full" boxShadow="sm">
				<GridItem colSpan={3}>
					<ToolbarItem w="full" bg="gray.900">
						<HStack>
							<IoLocationOutline size={24}/>
							<Text>{bookmarkTitle ? bookmarkTitle : "Home"}</Text>
						</HStack>
					</ToolbarItem>
				</GridItem>

				{/*{parentId && (*/}
				{/*	<NavLink to="/">*/}
				{/*		<GridItem colSpan={parentId ? 2 : 3}>*/}
				{/*			<ToolbarItem>*/}
				{/*				<Text> Home </Text>*/}
				{/*			</ToolbarItem>*/}
				{/*		</GridItem>*/}
				{/*	</NavLink>*/}
				{/*)}*/}
				{/*{*/}
				{/*	parentId && (*/}
				{/*		<NavLink to={toParent}>*/}
				{/*			<GridItem colSpan={1}>*/}
				{/*				<ToolbarItem>*/}
				{/*					<HStack>*/}
				{/*						<ArrowBackIcon/>*/}
				{/*						<Text>Back</Text>*/}
				{/*					</HStack>*/}
				{/*				</ToolbarItem>*/}
				{/*			</GridItem>*/}
				{/*		</NavLink>*/}
				{/*	)*/}
				{/*}*/}
				{/*<GridItem>*/}
				{/*	<ToolbarItem>*/}
				{/*		<ModeButton/>*/}
				{/*	</ToolbarItem>*/}
				{/*</GridItem>*/}
			</Grid>
			<Divider orientation="horizontal"/>
		</>
	)
}

export default BookmarkToolbar;

function ToolbarItem({children, ...rest}: AbsoluteCenterProps) {

	return (
		<Center bg="gray.700" color="gray.200" height={20} borderRadius={4} boxShadow="md" {...rest}>
			{children}
		</Center>
	)
}