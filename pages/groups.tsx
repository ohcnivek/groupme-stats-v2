import axios from "axios";
import { useRouter } from "next/router";
import { Layout } from "../components/layouts/Layout";
import { useState } from "react";

interface Group {
  id: string;
  members: Member[];
}

interface Member {
  name: string;
  nickname: string;
}

const Groups = () => {
  const router = useRouter();
  const { token } = router.query;
  const [groups, setGroups] = useState([]);

  const _fetchGroups = async () => {
    const res = await axios
      .get("https://api.groupme.com/v3/groups?token=" + token)
      .then((data) => {
        console.log(data);
      });
    console.log(res);
  };

  _fetchGroups();
  return <Layout>groups</Layout>;
};

export default Groups;
