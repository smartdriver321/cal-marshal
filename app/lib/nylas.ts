import Nylas from 'nylas'

export const nylasConfig = {
	clientId: process.env.NYLAS_CLIENT_ID,
	apiKey: process.env.NYLAS_API_SECRET_KEY,
	apiUri: process.env.NYLAS_API_URL,
	callbackUri: process.env.NEXT_PUBLIC_URL + '/api/oauth/exchange',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AuthConfig = {
	clientId: process.env.NYLAS_CLIENT_ID as string,
	redirectUri: 'http://localhost:3000/oauth/exchange',
}
export const nylas = new Nylas({
	apiKey: process.env.NYLAS_API_SECRET_KEY!,
	apiUri: process.env.NYLAS_API_URL,
})
