/*
	AUTHOR: Federico D.
	DATE: Feb 2019
	PURPOSE: A Fast cool template for creating directory list websites
*/

//dependencies
import { h, Component, render } from 'preact';

//components
import ListsFeed from '../../components/listsfeed';
import SearchBar from '../../components/searchbar';
import HomeFaq from '../../components/homefaq';
import MobileMenu from '../../components/mobilemenu';

//styles
import style from './style';

// -- fake api call
import fakeApi from '../../utils/api';


export default class Home extends Component {

	state = {
		test: "success",
		listData: null,
		faqData: null
	}

	//util functions ----
	//api call
	getListDataApi() {
		this.setState({ listData: fakeApi.returnFullListData() });

	}

	//apicall
	getFaqDataApi() {
		//simulate api call time
		setTimeout( () => {
			this.setState({ faqData: fakeApi.returnFullFaqData() });
		})
	}
	

	// gets called when this route is navigated to
	componentDidMount() {
		console.log("[*] Component Home Mounted");	
		console.log("[>] Calling API");
		this.getListDataApi();
		this.getFaqDataApi();
	}

	render( { isMobile, showMenu, toggleMenu }, { test, listData, faqData }) {
		//loading prompt
		if (listData === null) {
			return (
				<h1>LOADING...</h1>
			)
		}

		return (
		<div class={style.home}>
			<MobileMenu showMenu={showMenu} toggleMenu={toggleMenu} listFeedData={listData} isMobile={isMobile} />
			<SearchBar isMobile={isMobile} />
			<ListsFeed listFeedData={listData} isMobile={isMobile} />
			<HomeFaq faqData={faqData} isMobile={isMobile} />
		</div>
	)
	}
}