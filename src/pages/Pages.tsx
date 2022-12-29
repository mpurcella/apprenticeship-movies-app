import { lazy, Suspense } from "react";
import {
  Route,
  Navigate,
  Outlet,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Header from "../components/header/Header";
import Loading from "../components/loading/Loading";
import Home from "./home/Home";

const Popular = lazy(async () => await import("./discover/Popular"));
const TopRated = lazy(async () => await import("./discover/TopRated"));
const Upcoming = lazy(async () => await import("./discover/Upcoming"));
const Genres = lazy(async () => await import("./genres/Genres"));
const Movie = lazy(async () => await import("./movie/Movie"));

const pages = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/discover/popular"
        element={
          <Suspense fallback={<Loading />}>
            <Popular />
          </Suspense>
        }
      />
      <Route
        path="/discover/top-rated"
        element={
          <Suspense fallback={<Loading />}>
            <TopRated />
          </Suspense>
        }
      />
      <Route
        path="/discover/upcoming"
        element={
          <Suspense fallback={<Loading />}>
            <Upcoming />
          </Suspense>
        }
      />
      <Route
        path="/genres/:genre"
        element={
          <Suspense fallback={<Loading />}>
            <Genres />
          </Suspense>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <Suspense fallback={<Loading />}>
            <Movie />
          </Suspense>
        }
      />
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
