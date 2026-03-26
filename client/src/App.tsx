import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
import Home from "@/pages/Home";

const Destinations = lazy(() => import("@/pages/Destinations"));
const Stories = lazy(() => import("@/pages/Stories"));
const Gallery = lazy(() => import("@/pages/Gallery"));
const About = lazy(() => import("@/pages/About"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/destinations" component={Destinations} />
        <Route path="/stories" component={Stories} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return <Router />;
}

export default App;
