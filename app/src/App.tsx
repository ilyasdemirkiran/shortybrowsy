import './App.css';
import {
	Switch,
	Route,
} from "react-router-dom";
import BookmarksList from './collections/BookmarksList';

function App() {
	return (
		<Switch>
			<Route path="/:id?">
				<BookmarksList />
			</Route>
		</Switch>
		// <SimpleGrid p={2} spacingY={2} bgColor="gray.300" ref={containerRef}
		// 	borderRadius={1}>
		// 	<SimpleGrid columns={3} spacingX={2}>
		// 		<Center>
		// 			<Tooltip label="Open All" fontSize="xs">
		// 				<IconButton aria-label="Create" icon={<ViewIcon />} w="100%" borderRadius={2} height={10} onClick={openAll} />
		// 			</Tooltip>
		// 		</Center>
		// 		{/*	<Center>*/}
		// 		{/*		<IconButton aria-label="Create" icon={<AddIcon />} w="100%" borderRadius={2}  height={10}/>*/}
		// 		{/*	</Center>*/}
		// 		{/*	<Center>*/}
		// 		{/*		<Tooltip label={"Get Some Sleep"} fontSize="xs">*/}
		// 		{/*			<IconButton aria-label="Create" icon={<MoonIcon />} w="100%" borderRadius={2} height={10}/>*/}
		// 		{/*		</Tooltip>*/}
		// 		{/*	</Center>*/}
		// 		{/*	<Center>*/}
		// 		{/*		<IconButton aria-label="Create" icon={<DeleteIcon />} w="100%" borderRadius={2} height={10}/>*/}
		// 		{/*	</Center>*/}
		// 	</SimpleGrid>
		// 	<SimpleGrid spacingY={2}>
		// 		{
		// 			urlItems.map((item, index) => <UrlMenuItem key={index} item={item} keys={`${index + 1}`} />)
		// 		}
		// 	</SimpleGrid>
		// </SimpleGrid>
	);
}

export default App;
