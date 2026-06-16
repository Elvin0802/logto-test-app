import {
  getLogtoContext,
  signIn,
  signOut,
  getAccessTokenRSC,
} from "@logto/next/server-actions";
import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { logtoConfig } from "./logto";
import { ShowWeather, ShowClaimsButton } from "@/components/show-claims-button";

const Home = async () => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);
  const a = isAuthenticated
    ? await getAccessTokenRSC(logtoConfig, "http://localhost:5000")
    : "";

  return (
    <div>
      <nav>
        {isAuthenticated ? (
          <p>
            Hello, {claims?.sub},
            <SignOut
              onSignOut={async () => {
                "use server";

                await signOut(logtoConfig);
              }}
            />
          </p>
        ) : (
          <p>
            <SignIn
              onSignIn={async () => {
                "use server";

                await signIn(logtoConfig);
              }}
            />
          </p>
        )}
      </nav>

      <div className="flex gap-1 p-1 m-1">
        <ShowClaimsButton claims={claims} accessToken={a} />
        <ShowWeather claims={claims} accessToken={a} />
      </div>
    </div>
  );
};

export default Home;
