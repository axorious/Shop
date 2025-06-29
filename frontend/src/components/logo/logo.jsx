import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoContainer = ({ className }) => (
	<Link className={className} to="/">
		<div>
			<svg xmlns="http://www.w3.org/2000/svg" width="170" height="21" fill="none">
				<g fill="#000" clipPath="url(#a)">
					<path d="M10.6 21A10.8 10.8 0 0 1 3 18a10.5 10.5 0 0 1-3-7.5A10.1 10.1 0 0 1 6.4.8C7.6.3 9 0 10.5 0A11 11 0 0 1 18 3l-3.3 3.4c-.5-.5-1-1-1.8-1.2a6 6 0 0 0-2.4-.5 6 6 0 0 0-2.2.4c-.6.3-1.2.7-1.7 1.2s-.9 1.1-1.1 1.9c-.3.7-.4 1.5-.4 2.4a6 6 0 0 0 1.5 4.3c.5.5 1 1 1.7 1.2a6.5 6.5 0 0 0 4.7 0c.7-.3 1.3-.8 1.8-1.3L18 18a10.7 10.7 0 0 1-7.5 2.8ZM18.4 20.6 26 .4H31l7.5 20.2h-5.2l-5.7-17h1.8l-5.8 17h-5.1ZM40.3 20.6V.4h5v20.2h-5Zm4 0v-4.4h9.5v4.4h-9.5ZM56.1 20.6V.4h5v20.2h-5ZM64.6 20.6V.4h5v20.2h-5Zm4-7.5V8.7h9.8v4.4h-9.8Zm0-8.4V.4h10.2v4.3H68.6ZM90.8 21a10.9 10.9 0 0 1-7.5-3 10.5 10.5 0 0 1-3-7.5 10.6 10.6 0 0 1 3-7.5c.9-1 2-1.7 3.3-2.2 1.3-.5 2.7-.8 4.2-.8a10.9 10.9 0 0 1 7.6 3 10.5 10.5 0 0 1 3 7.5 10.5 10.5 0 0 1-6.4 9.7 11 11 0 0 1-4.2.8Zm0-4.6c1.1 0 2-.2 2.9-.7a5 5 0 0 0 1.9-2.1c.4-.9.7-2 .7-3.1a7 7 0 0 0-.4-2.4A5 5 0 0 0 93 5c-.7-.3-1.5-.5-2.3-.5-1.1 0-2 .3-3 .8-.7.5-1.4 1.1-1.8 2a8 8 0 0 0-.3 5.6c.2.8.6 1.4 1.1 2a5 5 0 0 0 4 1.5ZM107.8 12.4V8.8h3.8c.8 0 1.4-.2 1.9-.6.4-.4.6-1 .6-1.7s-.2-1.3-.6-1.7c-.5-.4-1-.6-1.9-.6h-3.8V.4h4.5c1.3 0 2.5.2 3.5.7a5.7 5.7 0 0 1 3.3 5.3 5.7 5.7 0 0 1-3.3 5.3c-1 .5-2.3.7-3.7.7h-4.3Zm-4 8.2V.4h5v20.2h-5Zm10.8 0-5.8-8.7 4.5-1 7 9.7h-5.7ZM122 20.6V.4h3.5l1.5 4.1v16.1h-5Zm13.6 0-11.5-15 1.4-5.2 11.6 15-1.5 5.2Zm0 0-1.3-4.2V.4h5v20.2h-3.7ZM142.9 20.6V.4h5v20.2h-5ZM150 20.6 157.5.4h4.8l7.6 20.2h-5.2l-5.7-17h1.8l-5.9 17h-5Z" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff" d="M0 0h170v21H0z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	</Link>
);

export const Logo = styled(LogoContainer)``;
