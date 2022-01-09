import dynamic from 'next/dynamic';
import { getProviders, signIn } from 'next-auth/react';

const Header = dynamic(() => import('../../components/Header'));

function SignIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img
          className="w-80 object-contain"
          src="https://links.papareact.com/ocw"
          alt="Instagam logo"
        />
        <p className="text-sm italic">
          This is not the REAL instagram app, It is built for educational
          purposes only
        </p>
        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="p-3 bg-blue-500 rounded-lg text-white"
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
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
