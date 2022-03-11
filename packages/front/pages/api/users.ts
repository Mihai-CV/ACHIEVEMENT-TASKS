import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { api } from "../../lib/api"

export default withApiAuthRequired(async (req, res) => {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res);
  console.log('accessToken', accessToken);
  console.log('client', api.defaults.baseURL);

  const res_api = await api.get('/verify', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(res_api.data);
});
