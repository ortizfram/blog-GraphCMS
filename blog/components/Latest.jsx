import { GraphQLClient, gql } from "graphql-request";
import Image from "next/image"; // for covers and thumbnails
import Link from "next/link";

const hygraph = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clf4izifj4o1a01t7f0c3e6m0/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      description
      slug
      coverImage {
        url
      }
      author {
        name
        photo {
          url
        }
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

const Latest = ({ posts }) => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center h-96">
        <h2 text-4xl>Latest Articles</h2>
        {posts?.slice(0, 2).map(({ id, title, slug, coverImage }) => (
          <div key={id}>
            <h2>
              <Link href={`/post/${slug}`}>{title}</Link>
            </h2>
            <Image src={coverImage.url} width={150} height={150} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
