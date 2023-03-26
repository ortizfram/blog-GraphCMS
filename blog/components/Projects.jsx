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

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-2 items-center h-96">
        <h2 text-4xl>Projects</h2>
        {/* <div className="grid grid-cols-3">
          {posts.slice(0, 3).map(({ title, slug, coverImage }) => (
            <div key={slug}>
              <h2>
                <Link href={`/post/${slug}`}>{title}</Link>
              </h2>
              <Image src={coverImage.url} width={150} height={150} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
