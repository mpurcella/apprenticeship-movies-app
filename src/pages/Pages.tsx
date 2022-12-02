import { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Temp from "./Temp";

const Discover = lazy(async () => await import("./discover/Discover"));
const Genres = lazy(async () => await import("./genres/Genres"));
const Movie = lazy(async () => await import("./movie/Movie"));
const Actor = lazy(async () => await import("./actor/Actor"));

function Pages() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/discover" />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/actor" element={<Actor />} />
        </Routes>
        <Temp />
      </Suspense>
    </>
  );
}

export default Pages;
