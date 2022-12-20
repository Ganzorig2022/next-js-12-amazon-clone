https://www.npmjs.com/package/@reduxjs/toolkit
https://www.npmjs.com/package/react-redux
https://www.npmjs.com/package/@tailwindcss/line-clamp

npm i @heroicons/react

# 2 - Image sliding - Carousel

"/src/components/Banner.js dr used.

https://www.npmjs.com/package/react-responsive-carousel

yarn add react-responsive-carousel

# 3 - ServerSideProps from "fakestoreapi.com"

yarn add react-currency-formatter

<!-- Set a new remote repo -->

git remote set-url origin https://github.com/Ganzorig2022/next-js-12-amazon-clone.git

# 4 - Passwordless Authentication with Next Auth

Read this: https://next-auth.js.org/getting-started/example

1. yarn add next-auth
2. "/pages/api/auth/[...nextauth].js" file uusgene.
3. '/src/pages/\_app.js" next-auth provider-aa WRAP hiine.

# 5 - Add Firebase

1. Create new firebase project
2. Project Settings --> Add web --> Register
3. "/firebase.js" file uusgeed firebase config file-aa copy-dono.
4. Firebase --> Authentication --> Google provider --> Web SDK Configuration -->

# 6 - Sign In & Sign Out

1. "/src/components/Header.js" dr "signIn,signOut,useSession"-iig importlono.
2. SignIn dr darhad aldaa "Access blocked: This app’s request is invalid" zaana. Error details dr darna.
   https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow

-- Create credentials --> OAuth Client Id --> URi\* dr ni "http://localhost:3000"--ig bichne.
-- Authorised Redirect URis\* dr ni "http://localhost:3000/api/auth/callback/google"
--Client Id, Client Secret--vvdiig ".env.local" dr huulna.

3. '/src/components/Header.js" dotor SIGN IN, SIGN OUT functionality hiiw.

# 7 - REDUX state management

1. "/src/slices/basketSlice.js" file uusgew.
2. "/src/pages/checkout.js" file dtor ashiglaw.

# 8 - Deploy to VERCEL

1. env-ee vercel dr huulna.
