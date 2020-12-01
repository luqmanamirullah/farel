import Document from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default class JssDocument extends Document {
	static async getInitialProps(ctx) {
		const registry = new SheetsRegistry();
		const generateId = createGenerateId();
		const originalRenderPage = ctx.renderPage;
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => (
					<JssProvider registry={registry} generateId={generateId}>
						<App {...props} />
					</JssProvider>
				)
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					<link
						href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
						rel="stylesheet"
						type="text/css"
					/>
					<style id="server-side-styles">{registry.toString()}</style>
					<meta name="viewport" content="width=device-width,initial-scale=1" />
				</>
			)
		};
	}
}
