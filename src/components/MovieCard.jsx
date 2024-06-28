import React from "react";

const MovieCard = () => {
  return (
    <div className="bg-body-gray text-white min-h-screen">
      <div className="text-3xl px-4 py-5">Box Office - Week 34</div>
      <div className="flex">
        <article className="bg-card-gray rounded overflow-hidden shadow-lg ml-4 w-454 h-512">
          <div className="flex flex-col p-4">
            <div className="flex justify-center">
              <img
                src="/images/image.png"
                className="w-48 h-72"
                alt="First Movie Poster"
              />
            </div>
            <div className="text-xl pt-4">The Adventure Begins</div>
            <div className="text-sm pt-2">Rating: 8.5/10</div>
            <div className="text-sm py-2">
              An epic journey of discovery and adventure, following a group of
              friends as they uncover hidden secrets and face incredible
              challenges.
            </div>
          </div>
        </article>
        <article className="bg-card-gray rounded overflow-hidden shadow-lg mx-6 w-454 h-512">
          <div className="flex flex-col p-4">
            <div className="flex justify-center">
              <img
                src="/images/image2.png"
                className="w-48 h-72"
                alt="Second Movie Poster"
              />
            </div>
            <div className="text-xl pt-4">Mystery in the Shadows</div>
            <div className="text-sm pt-2">Rating: 7.9/10</div>
            <div className="text-sm py-2">
              A thrilling mystery that delves into the dark secrets of a small
              town, revealing hidden connections and unexpected twists.
            </div>
          </div>
        </article>
        <article className="bg-card-gray rounded overflow-hidden shadow-lg mr-4 w-454 h-512">
          <div className="flex flex-col p-4">
            <div className="flex justify-center">
              <img
                src="/images/image3.png"
                className="w-48 h-72"
                alt="Third Movie Poster"
              />
            </div>
            <div className="text-xl pt-4">Romance in Paris</div>
            <div className="text-sm pt-2">Rating: 8.7/10</div>
            <div className="text-sm py-2">
              A heartwarming tale of love and passion set against the charming
              backdrop of Paris, where two strangers find themselves drawn
              together by fate.
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MovieCard;
