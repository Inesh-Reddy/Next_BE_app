import Image from "next/image";
import axios from "axios";


async function getUserData() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

//async component 
export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div>
      Hi There! <br />
      {userDetails.email} <br />
      {userDetails.name}
    </div>
  );
}
