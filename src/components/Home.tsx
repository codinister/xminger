import Blogsection from "./home/Blogsection"
import Clientssection from "./home/Clientssection"
import Hero from "./home/Hero"
import Whatwedosection from "./home/Whatwedosection"
import Whowearesection from "./home/Whowearesection"

const Home = () => {
  return (
    <>
    <Hero />
    <Whowearesection />
    <Whatwedosection />
    <Clientssection />
    <Blogsection />
    </>
  )
}

export default Home