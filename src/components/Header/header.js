import SideMenu from './Navigation/side-menu';
import Search from './Search/search';
import AccountMenu from './Account/account-menu';
import './header.scss';

export default function Header() {
	return (
		<header
			id="header"
			className="header"
			name="header">
			<SideMenu />
			<div className="header__info">
				<Search />
				<AccountMenu />
			</div>
		</header>
	);
}
