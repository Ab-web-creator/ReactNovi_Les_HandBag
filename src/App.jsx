import './App.css'
import Bag from "./components/Bag.jsx";
import BagCard from "./components/bagCard.jsx";
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"
import Footer from "./components/Footer.jsx";
function App() {



  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
            <Bag
                disabled={false}
                title={"to the collection"}
            />
            <Bag
                disabled={false}
                title={"shop all bags"}
            />
            <Bag
                disabled={true}
                title={"pre-orders"}
            />
        </nav>
          <BagCard/>

          <footer>
              <Footer
                  src=""
                  title={"The brand"}
                  text={"Lorem dud ukkreasn mashi krasava krasu inna theoridukkreasn mashi krasavaf  krasu inna theoridukkreasn mashi krasavaf  krasu inna theoridukkreasn mashi krasavaf  krasu inna theoridukkreasn mashi krasavaf adsfasdf"}
              />

              <Footer
                  src={brand}
                  title={"Will it be seen?"}
                  text={""}
              />
              <Footer
                  src={ourStory}
                  title={""}
                  text={""}
              />
              <Footer
                  src=''
                  title={"Our Story"}
                  text={"KKrasavaf  krasu inna theoridukkreasn mashi krasavaf  krasu inna theoridukkreasn mashi" +
                      " krasavaf adsfasdf" +
                      " asfdasdfasd !!!!" +
                      " krasu inn"}
              />
          </footer>
      </>
  )
}

export default App
