import Link from 'next/link';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	list: {
		listStyle: 'none',
		boxSizing: 'border-box',
		padding: 0,
		position: 'relative',
		float: 'none',
		margin: '0 ',
		textAlign: 'left ',
		borderTop: '1px solid #EEE',
		'&:first-child': {
			borderTop: '0px'
		},
		'&:hover #dropdown': {
			display: 'block'
		}
	},
	link: {
		listStyle: 'none',
		textAlign: 'left !important',
		boxSizing: 'border-box',
		backgroundColor: 'transparent',
		textDecoration: 'none !important',
		display: 'block',
		lineHeight: '22px',
		fontSize: 15,
		letterSpacing: 1,
		textTransform: 'uppercase',
		transition: 'margin .4s ease, padding .4s ease',
		padding: '14px 5px !important',
		border: 'none !important',
		margin: '0 !important',
		color: "#000 !important",
		fontFamily: "sans-serif",
		
	},
	linkDiv: {
		listStyle: 'none',
		textAlign: 'left !important',
		lineHeight: '22px',
		fontWeight: 'bold',
		fontSize: 13,
		letterSpacing: 1,
		textTransform: 'uppercase',
		fontFamily: 'Raleway',
		color: '#6d7893 !important',
		boxSizing: 'border-box'
	},
	dropdownBox: {
		padding: 0,
		listStyle: 'none',
		transition: 'top .4s ease',
		height: 'auto',
		left: 0,
		margin: 0,
		position: 'relative',
		width: 'auto',
		maxWidth: 'none',
		background: 'transparent ',
		boxShadow: 'none',
		border: 0,
		borderTop: '1px solid #EEE',
		zIndex: 1,
		top: 0,
		paddingLeft: 15,
		borderTopColor: '#EEE !important',
		display: 'none',
	},
	childList: {
		padding: 0,
		position: 'relative',
		margin: 0,
		textAlign: 'left ',
		float: 'none',
		borderTop: 0,
		borderTopColor: '#EEE '
	},
	childA: {
		backgroundColor: 'transparent',
		textDecoration: 'none ',
		display: 'block',
		lineHeight: 22,
		border: 'none',
		margin: 0,
		transition: 'all .2s ease-in-out',
		padding: '11px 5px',
		textTransform: 'none',
		color: '#444'
	},
	childDiv: {
		textAlign: 'left',
		lineHeight: '22px',
		letterSpacing: 0,
		fontFamily: "'Lato',sans-serif",
		fontSize: 13,
		textTransform: 'none',
		fontWeight: 400,
		textTransform: 'uppercase',
		color: '#444 !important',
		boxSizing: 'border-box'
	},
	'@media (max-width: 991.98px)': {
		dropdownBox: {
			'& li :hover div': {
				fontWeight: '700'
			}
		}
	}
});
const Menu = ({ menu }) => {
	const classes = useStyles();
	return (
		<li className={classes.list}>
			<Link href={menu.slug} passHref>
				<a className={classes.link}>
					<div className={classes.linkDiv} style={{ color: 'yellow' }}>
						{menu.name}
					</div>
				</a>
			</Link>
			<div>{menu.childrens && <DropdownMenu childrens={menu.childrens} />}</div>
		</li>
	);
};

const DropdownMenu = ({ childrens }) => {
	const classes = useStyles();

	return (
		<ul className={classes.dropdownBox} id="dropdown">
			{childrens.map((child, index) => (
				<li key={child.name} className={classes.childList}>
					<Link href={child.slug} passHref>
						<a className={classes.childA}>
							<div className={classes.childDiv}>{child.name}</div>
						</a>
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Menu;
