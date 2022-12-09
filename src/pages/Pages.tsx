import { lazy, Suspense } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Popular = lazy(async () => await import("./discover/Popular"));
const TopRated = lazy(async () => await import("./discover/TopRated"));
const Upcoming = lazy(async () => await import("./discover/Upcoming"));
const Genres = lazy(async () => await import("./genres/Genres"));
const Movie = lazy(async () => await import("./movie/Movie"));
const Actor = lazy(async () => await import("./actor/Actor"));

function Pages() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<Navigate replace to="/discover/popular" />}
          />
          <Route
            path="/discover/popular"
            element={
              <Suspense fallback={<div>Loading popular movies...</div>}>
                <Popular />
              </Suspense>
            }
          />
          <Route
            path="/discover/top-rated"
            element={
              <Suspense fallback={<div>Loading top rated movies...</div>}>
                <TopRated />
              </Suspense>
            }
          />
          <Route
            path="/discover/upcoming"
            element={
              <Suspense fallback={<div>Loading upcoming movies...</div>}>
                <Upcoming />
              </Suspense>
            }
          />
          <Route
            path="/genres/:genre"
            element={
              <Suspense fallback={<div>Loading genres...</div>}>
                <Genres />
              </Suspense>
            }
          />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/actor" element={<Actor />} />
          <Route path="/not-found" element={<div>Page not found.</div>} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Route>
      </Routes>
    </>
  );
}

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Pages;
