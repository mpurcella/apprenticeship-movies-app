import { lazy, Suspense } from "react";
import {
  Route,
  Navigate,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "../components/header/Header";
import Home from "./home/Home";

const Popular = lazy(async () => await import("./discover/Popular"));
const TopRated = lazy(async () => await import("./discover/TopRated"));
const Upcoming = lazy(async () => await import("./discover/Upcoming"));
const Genres = lazy(async () => await import("./genres/Genres"));
const Movie = lazy(async () => await import("./movie/Movie"));
const Actor = lazy(async () => await import("./actor/Actor"));

const pages = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
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
      <Route
        path="/movie/:id"
        element={
          <Suspense fallback={<div>Loading movie...</div>}>
            <Movie />
          </Suspense>
        }
      />
      <Route path="/actor" element={<Actor />} />
      <Route path="/not-found" element={<div>Page not found</div>} />
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Route>
  )
);

export default pages;

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
