import Navbar from "@/components/Navbar";
import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image"; // for covers and thumbnails
import Link from "next/link";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master"
);

const QUERY = gql`
  {
    posts {
      title
      description
      slug
      coverImage {
        url
      }
      content {
        html
      }
      author {
        name
        photo {
          url
        }
        bio
      }
      categories {
        name
        slug
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await hygraph.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div>
        <h2>Blog</h2>
      </div>
      <div>List of Blog Posts go Here!!!</div>
    </div>
  );
}
