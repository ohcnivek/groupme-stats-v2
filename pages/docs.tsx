import { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";

interface Props {}

const Doc: NextPage<Props> = () => {
  return (
    <Layout>
      <div>Add info about the project here</div>
    </Layout>
  );
};

export default Doc;
