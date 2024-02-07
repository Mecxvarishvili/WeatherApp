import getLocalWeather from "@/lib/getLocalWeather";

export default async function HomePage () {
  const userWeather: Promise<string> = getLocalWeather()
  const data = await  userWeather
  console.log(data)
  return (
    <div>
      Home Page
    </div>
  );
};
