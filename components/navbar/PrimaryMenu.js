import Menu from './menu';

import { createUseStyles } from 'react-jss';
import menus from './menus';
import { useMemo } from 'react';

const useStyles = createUseStyles((theme) => ({
	base: {
		display: 'block',
		float: 'left',
		marginTop: 5
	},
	menuList: {
		color: '#fff',
		padding: 0,
		listStyle: 'none',
		margin: 0,
		opacity: 1,
		transition: 'height .4s ease, margin .4s ease, opacity .2s .2s ease',
		float: 'left',
		paddingRight: 15,
		marginRight: 15,
		touchAction: 'pan-y'
	}
}));

const PrimaryMenu = ({ colorMenu, transparant, whiteLogo, isSticky }) => {
	const classes = useStyles();
	return (
		<div className={classes.base}>
			<ul className={classes.menuList}>
				{menus.map((menu) => (
					<Menu
						menu={menu}
						isSticky={isSticky}
						key={menu.name}
						colorMenu={colorMenu}
						transparant={transparant}
						whiteLogo={whiteLogo}
					/>
				))}
			</ul>
		</div>
	);
};

export default PrimaryMenu;
