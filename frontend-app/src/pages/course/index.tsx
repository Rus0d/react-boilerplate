import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  await new Promise(r => setTimeout(r, 500));
  return "I came from the About.tsx loader function!";
}

export function Component() {
  let data = useLoaderData() as string;

  return (
    <div>
      <p>This is a great course. You're gonna love it!</p>
      <p>{data}</p>

      <Link to="/courses">See all courses</Link>
    </div>
  );
}

Component.displayName = "CoursesPage";
