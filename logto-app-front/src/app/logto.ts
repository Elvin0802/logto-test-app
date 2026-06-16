export const logtoConfig = {
  endpoint: process.env.LOGTO_ENDPOINT!,
  appId: process.env.LOGTO_APP_ID!,
  appSecret: process.env.LOGTO_APP_SECRET!,
  baseUrl: process.env.APP_BASE_URL!,
  cookieSecret: process.env.LOGTO_COOKIE_SECRET!,
  resources: ['http://localhost:5000'],
  scopes: ['read:weather'],
  cookieSecure: process.env.NODE_ENV === "production",
};
