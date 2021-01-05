import clsx from 'clsx';
import Link from 'next/link';
import { createUseStyles } from 'react-jss';

const menuStyles = createUseStyles({
	menu: {
		listStyle: 'none',
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
		position: 'relative',
		float: 'left',
		marginLeft: 0,
		'&:hover #dropdown ': {
			display: 'block'
		}
	},
	link: {
		textDecoration: 'none ',
		display: 'block',
		padding: '39px 15px',
		fontWeight: 'bold',
		transition: 'margin .4s ease, padding .4s ease',
		color: '#6d7893'
	},
	stickyLink: {
		paddingTop: 19,
		paddingBottom: 19
	},
	textMenu: {
		color: '#6D7893',
		listStyle: 'none',
		lineHeight: '22px',
		fontWeight: 'bold',
		fontSize: 13,
		letterSpacing: 1,
		textTransform: 'uppercase',
		fontFamily: "'Raleway', sans-serif",
		color: '#6d7893',
		boxSizing: 'border-box'
	},
	dropdownBox: {
		boxSizing: 'border-box',
		padding: 0,
		display: 'none',
		listStyle: 'none',
		transition: 'top .4s ease',
		position: 'absolute',
		width: 220,
		backgroundColor: '#fff',
		boxShadow: '0px 13px 42px 11px rgba(0, 0, 0, 0.05)',
		border: '1px solid #eee',
		borderTop: '2px solid #6d7893',
		height: 'auto',
		zIndex: 199,
		top: '100%',
		left: 0,
		margin: 0
	},
	childLink: {
		backgroundColor: 'transparent',
		textDecoration: 'none !important',
		display: 'block',
		lineHeight: 22,
		padding: '39px 15px',
		textTransform: 'uppercase',
		fontSize: 12,
		fontWeight: 700,
		color: '#666',
		paddingTop: 10,
		paddingBottom: 10,
		border: 0,
		letterSpacing: 0,
		fontFamily: "'Lato',sans-serif",
		transition: 'all .2s ease-in-out',
		'&:hover': {
			backgroundColor: '#f9f9f9',
			paddingLeft: 18
		},
		'&:hover div': {
			color: '#6d7893 !important'
		}
	},
	childDiv: {
		listStyle: 'none',
		lineHeight: '22px',
		textTransform: 'uppercase',
		fontSize: 12,
		fontWeight: 700,
		color: '#666',
		fontFamily: "'Lato',sans-serif",
		boxSizing: 'border-box'
	}
});

export const Menu = ({ menu, isSticky = false, colorMenu, transparant }) => {
	const classes = menuStyles();
	return (
		<li className={classes.menu} key={menu.name}>
			<Link href={menu.slug} as={menu.as} passHref>
				<a className={clsx(classes.link, isSticky ? classes.stickyLink : null)}>
					<div
						className={classes.textMenu}
						style={
							transparant && !isSticky ? { color: '#fff' } : { color: colorMenu ? colorMenu : '#6d7893' }
						}
					>
						{menu.name}
					</div>
				</a>
			</Link>
			{menu.childrens && <DropdownMenu childrens={menu.childrens} colorMenu={colorMenu} />}
		</li>
	);
};

export const DropdownMenu = React.memo(
	({ childrens, colorMenu }) => {
		const classes = menuStyles();

		return (
			<>
				<ul className={classes.dropdownBox} id="dropdown">
					{childrens.map((child) => (
						<Link href={child.slug} passHref>
							<a>
								<li key={child.name} className={classes.childLink}>
									<div
										className={classes.childDiv}
										style={{ color: colorMenu ? colorMenu : '#6d7893' }}
									>
										{child.name}
									</div>
								</li>
							</a>
						</Link>
					))}
				</ul>
			</>
		);
	},
	(prevProps, nextProps) => prevProps !== nextProps
);
