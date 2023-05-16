export default function Content() {
  return (
    <>
      {
        [...Array(1000).keys()].map((i) => (
          <p key={i}>{i},&nbsp;</p>
        ))
      }
    </>
  )
}