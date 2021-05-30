import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	padding: 0;
	width: 1400px;
	@media (max-width: 768px) {
		max-width: 100%;
		position: static;
	}
`

export const Nav = styled.nav`
	position: relative;
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.navBg};
	box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
	@media (max-width: 768px) {
		min-height: 3.5rem;
	}
`
export const Hamburger = styled.div`
	display: none;
	flex-direction: column;
	cursor: pointer;
	span {
		height: 2px;
		width: 1.6rem;
		margin-bottom: 4px;
		background-color: #d10068;
	}
	@media (max-width: 768px) {
		display: flex;
		position: absolute;
		top: 15px;
		right: 20px;
	}
`
export const MenuLink = styled.a`
	cursor: pointer;
	font-size: 0.95rem;
	font-weight: 400;
	padding: 1rem 2rem;
	text-align: center;
	text-decoration: none;
	color: ${(props) => props.theme.links};
	transition: color ${(props) => props.theme.transitionTime};
	&:hover {
		color: #ff66b3;
	}
`

export const Menu = styled.div`
	display: flex;
	width: 330px;
	margin-left: auto;
	position: relative;
	transition: all ${(props) => props.theme.transitionTime};
	@media (max-width: 768px) {
		align-items: flex-end;
		justify-content: center;
		overflow: hidden;
		width: 100%;
		opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
		height: ${({ isOpen }) => (isOpen ? '150px' : '0px')};
	}
`
export const Logo = styled.a`
	position: absolute;
	left: 20px;
	top: 12px;
	color: ${(props) => props.theme.headings};
	font-size: 1.5rem;
	font-family: 'Merriweather', serif;
	font-weight: 200;
	text-decoration: none;
	transition: color ${(props) => props.theme.transitionTime};
	span {
		font-weight: 800;
		color: #d10068;
	}
	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`
