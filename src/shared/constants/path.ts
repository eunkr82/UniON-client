export const ROUTE_PATH = {
  HOME: '/',
  LOGIN: '/login',
  SIGN_UP: '/signup',

  POSTS: '/posts',
  POST_DETAIL: '/posts/:postId',

  MY_PROFILE: '/me/profile',
  MY_PORTFOLIO: '/me/portfolio',

  MEMBERS: '/members',
  MEMBERS_RECOMMEND: '/members/recommend',
  MEMBER_PROFILE: '/members/:memberId/profile',
  MEMBER_PORTFOLIO: '/members/:memberId/portfolio',
} as const;
