export default function SkeletonPosts() {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <div className="post skeleton" key={index}>
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      ))}
    </>
  );
}
