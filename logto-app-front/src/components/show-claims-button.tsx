"use client";

interface ShowClaimsButtonProps {
  claims: any;
  accessToken: any;
}

export function ShowClaimsButton({
  claims,
  accessToken,
}: ShowClaimsButtonProps) {
  function show() {
    console.log("c: ", JSON.stringify(claims, null, 2));
    console.log("a: ", accessToken);
  }

  return (
    <button className="w-20 h-6 p-1 m-1" onClick={show}>
      Show
    </button>
  );
}

export function ShowWeather({ claims, accessToken }: ShowClaimsButtonProps) {
  async function show() {
    await fetch("http://localhost:5000/WeatherForecast/Get", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return (
    <button className="w-20 h-6 p-1 m-1" onClick={show}>
      Show 2
    </button>
  );
}
