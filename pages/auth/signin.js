import { getProviders, signIn } from 'next-auth/react';

function SignIn({ providers }) {
  console.log(providers);
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
}

// Server side rendering
export async function getServerSideProps(context) {
  return {
    props: {
      providers: await getProviders(),
    },
  };
}

export default SignIn;
