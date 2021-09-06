import {PathSignIn} from '../components/routePath';

export const initialData = {
  pageInfo: [
    {
      link: { linkName: 'Reset it here', linkUrl: `${PathSignIn}` },
      buttonName: 'Login',
      itemInfo: 'Forgot your password?',
      inputTypes: { email: '', password: '' },
    },
  ]
}