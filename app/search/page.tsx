import { graphqlClient } from "@/clients/api";
import SearchBar from "@/components/SearchBar";
import UserList from "@/components/UserList";
import { getAllUserQuery, getSearchUserQuery } from "@/graphql/query/user";

interface UserInterFace {
  id: string;
  firstName: string;
  lastName?: string;
  profileImageUrl?: string;
}

const SearchComponent = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const searchQuery = searchParams.search ?? "";

  let users: UserInterFace[] = [];

  const initialAlluser = await graphqlClient.request(getAllUserQuery);
  const filteredUser = await graphqlClient.request(getSearchUserQuery, {
    searchQuery: searchQuery,
  });

  if (searchQuery.length > 0) {
    if (filteredUser.getSearchUser) {
      users = (filteredUser.getSearchUser as UserInterFace[]).map((user) => user);
    } else {
      users = [];
    }
  } else if (initialAlluser.getAllUser) {
    initialAlluser.getAllUser.map((Alluser) => {
      users = (initialAlluser.getAllUser as UserInterFace[]).map((Alluser) => Alluser);
    });
  } else {
    users = [];
  }

  return (
    <div className="flex justify-center relative ">
      <div className="w-[80%] flex flex-col">
        <SearchBar />
      </div>
      <div>
        <UserList users={users}    />
      </div>
    </div>
  );
};

export default SearchComponent;
