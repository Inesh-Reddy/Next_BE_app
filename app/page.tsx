import Image from "next/image";
import axios from "axios";


async function getUserData() {
  // await new Promise((r)=>setTimeout(r,5000));
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

//async component 
export default async function Home() {

  const userDetails = await getUserData();
  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userDetails?.name}
                </div>
                {userDetails?.email}
            </div>
        </div>
    </div>
  );
}
