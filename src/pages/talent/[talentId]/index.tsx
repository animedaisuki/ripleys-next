import axios from "axios";
import { GetServerSidePropsContext } from "next";
import React from "react";

import Layout from "@/components/Layout/Layout";
import TalentProfile from "@/components/TalentProfile/TalentProfile";

import { TalentType } from "@/model/types";
import config from "@/config/config";

interface props {
  talent: TalentType;
}

const TalentProfilePage: React.FC<props> = ({ talent }) => {
  return (
    <Layout>
      <TalentProfile talent={talent} />
    </Layout>
  );
};

export default TalentProfilePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { talentId } = context.query;

    //TODO:Remove Config
    const res = await axios.get(
      `${config.baseUrl}/api/talent?action=queryTalentById&&talentId=${talentId}`,
    );

    const { talent } = res.data;

    if (!talent) return { notfound: true };

    return { props: { talent } };
  } catch (e) {
    console.log(e);
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }
}
