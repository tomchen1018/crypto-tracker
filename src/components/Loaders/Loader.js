import ContentLoader from "react-content-loader"

const Loader = () => (
  <ContentLoader
    speed={2}
    width={380}
    height={400}
    viewBox="0 0 460 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="40" cy="40" r="32" />
    <rect x="80" y="25" rx="5" ry="5" width="360" height="30" />

    <circle cx="40" cy="120" r="32" />
    <rect x="80" y="105" rx="5" ry="5" width="360" height="30" />

    <circle cx="40" cy="200" r="32" />
    <rect x="80" y="185" rx="5" ry="5" width="360" height="30" />

    <circle cx="40" cy="280" r="32" />
    <rect x="80" y="265" rx="5" ry="5" width="360" height="30" />

  </ContentLoader>
)

export default Loader