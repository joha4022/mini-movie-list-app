export default function Home() {
  const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  return (
    <>
      {movies.map((movie, index) => {
        return(
          <div key={index}>
            {movie.title}
          </div>
        )
      })}
    </>
  )
}