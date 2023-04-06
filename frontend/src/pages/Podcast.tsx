import { useEffect } from "react";

function Podcast() {
  useEffect(() => {
    document.title = "Mission14 - Podcast";
  });

  return (
    <div className="text-center">
      <h1 className="display-4">Check out the Baconsale podcast!</h1>
      <a href="https://baconsale.com">
        <h2>BACONSALE</h2>
      </a>
      <p>
        A COMEDIAN WHO LIKES MOVIES AND A MOVIE CRITIC WHO IS SOMETIMES FUNNY
        DISCUSS MOVIES, MUSIC, TELEVISION SHOWS, VIDEO GAMES AND OTHER POP
        CULTURE TOPICS.
      </p>
    </div>
  );
}

export default Podcast;
