import HeroImage from "../components/HeroImage";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Mission14 - Home";
  });

  return (
    <>
      <HeroImage
        image="/JoelHiltonHeadshot.jpg"
        alt="Joel Hilton Hero Image"
        title="Welcome the the Joel Hilton Website!"
        subtitle="Check out my podcast and movie collection."
      ></HeroImage>
      <h2 className="mt-4 p-2">Do you like to watch Movies?</h2>
      <p>
        If you like watching movies then you're in luck because that means that
        there is a possiblity, however slight, that you might like some of the
        same movies as Joel Hilton. Check out the Collection page to see if this
        possiblity is in fact a reality. If you are one of the lucky visitors
        who indeed do share, or wish to share, the experience of having watched
        a movie once watched by the one and only Joel Hilton then you should
        check out the podcast page and listen to him talk about having watched
        said movie sometime in the past.
      </p>
    </>
  );
}

export default Home;
