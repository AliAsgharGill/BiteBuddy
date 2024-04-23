import { useQuery } from "react-query";
import { fetchRestaurants, fetchUsers } from "../../../api/api";
import Header from "./HeroPro";
import Deals from "./Deals";

const Home = () => {
  const {
    data: restaurantData,
    isLoading: restaurantLoading,
    isError: restaurantError,
  } = useQuery("restaurants", fetchRestaurants);

  const {
    data: userData,
    isLoading: userLoading,
    isError: userError,
  } = useQuery("users", fetchUsers);

  if (restaurantLoading || userLoading) return <div>Loading...</div>;
  if (restaurantError || userError) return <div>Error Fetching Data</div>;

  interface Restaurant {
    id: string;
    name: string;
    cuisine: string;
    address: string;
    menu: MenuItem;
  }

  interface MenuItem {
    id: number;
    name: string;
    price: number;
  }
  interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  return (
    <>
      <div>
        <Header />
        <Deals />
        
        {restaurantData &&
          restaurantData.map((restaurant: Restaurant) => (
            <p key={restaurant.id}>{restaurant.name}</p>
          ))}
        <h1>Users</h1>
        {userData &&
          userData.map((user: User) => <p key={user.id}>{user.name}</p>)}
      </div>
    </>
  );
};

export default Home;
