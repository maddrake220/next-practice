import React from "react";
import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
export default function photos({ photos }) {
  console.log(photos);
  return (
    <StyledPhotos>
      <HeadInfo title={"My Blog Photos"} />
      photo
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`/photos/${photo.id}`}>
              <a>
                <Image
                  src={photo.thumbnailUrl}
                  width={100}
                  height={100}
                  alt={photo.thumbnailUrl}
                />
                <span>{photo.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </StyledPhotos>
  );
}
const URL = "https://jsonplaceholder.typicode.com/photos?_start=0&_end=10";

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

const StyledPhotos = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    li {
      display: flex;
      flex-direction: column;
    }
  }
`;
