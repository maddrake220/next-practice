import HeadInfo from "../components/HeadInfo";
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <HeadInfo title={"My Blog"} />
      <h1>Welcome to My Blog!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
const URL = "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10";
// page에 접속할 때 마다 요청을 해서 서버에서 만든 html 파일을
// 그때마다 보여주는 방식
// 서버에서 데이터가 바뀔때마다 즉각 적용
// 즉, 빈번한 데이터 변경이 일어나는 페이지를 만들때 사용하면 좋다!
// export const getServerSideProps = async () => {
//   const res = await fetch("http://localhost:8080/api/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// 빌드할때 데이터를 미리 만들어서 보여줌
// 즉 서버에서 데이터가 바뀌어도 적용되지 않음
// 해결? -> Increment Static Regeneration
// revalidate: 20 ->
// 20초 지난 시점부터(언제든지) 접속이 일어나면 파일을 재 생성
export const getStaticProps = async () => {
  const res = await fetch(URL);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20,
  };
};
