import React from "react";
import Image from "next/image";
import Link from "next/link";

function Photo({ photo }) {
  //   const router = useRouter();
  //   console.log(router);
  const { title, url } = photo;
  return (
    <div>
      <h2>image {title}</h2>
      {/* <h2>image {router.query.id}</h2> */}
      <Image src={url} width={500} height={500} alt={url} />
      <Link href="/photos">
        <a>Go Back</a>
      </Link>
    </div>
  );
}
export default Photo;

const URL = `https://jsonplaceholder.typicode.com/photos`;

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;
  const res = await fetch(`${URL}/${id}`);
  const photo = await res.json();
  return {
    props: {
      photo,
    },
  };
};

// Dynamic SSG Page 는 static path value가 필요하다
export const getStaticPaths = async () => {
  const res = await fetch(`${URL}?_start=0&_end=10`);
  const photos = await res.json();
  const ids = photos.map((photo) => photo.id);
  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });
  return {
    paths,
    // fallback: "blocking" -> 지정하지 않은 패스 조회
    fallback: false,
  };
};
