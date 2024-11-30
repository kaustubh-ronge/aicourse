"use client"
import React, { useEffect, useState } from "react";
import { db } from "@/configs/db";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import { useParams, useRouter } from "next/navigation";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { CourseList, Chapters } from "@/configs/schema";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

const FinishScreen = () => {
  const { user } = useUser();
  const params = useParams();
  const router = useRouter();

  const [course, setCourse] = useState([]);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (params && user) {
      GetCourse();
      GetChapters();
    }
  }, [params, user]);

  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(
          and(
            eq(CourseList.courseId, params.courseId),
            eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress)
          )
        );
      setCourse(result[0]);
      console.log("Course data:", result);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  const GetChapters = async () => {
    try {
      const result = await db
        .select()
        .from(Chapters)
        .where(eq(Chapters.courseId, params.courseId));
      setChapters(result);
      console.log("Chapters data:", result);
    } catch (error) {
      console.error("Error fetching chapters data:", error);
    }
  };

  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-2xl my-3 text-red-700">
        Congrats Your Course is Ready!!
      </h2>
      <CourseBasicInfo course={course} refreshData={() => console.log()} />
      <h2 className="mt-3">Course URL</h2>
      <h2 className="text-center text-gray-400 border p-2 rounded flex gap-5 items-center">
        {}
        <HiOutlineClipboardDocumentCheck
          className="h-8 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              process.env.NEXT_PUBLIC_HOST_NAME +
                "/course/view/" +
                course?.courseId
            )
          }
        />
      </h2>
      <h2 className="mt-5 text-xl font-bold">Chapters</h2>
      <div className="mt-3 space-y-5">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.chapterId}
            className="border shadow-lg p-5 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100"
          >
            <h3 className="text-lg font-semibold text-blue-700">
              Chapter {index + 1}: {chapter.name || `Chapter ${index + 1}`}
            </h3>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Video ID:</span>{" "}
              <a
                href={`https://www.youtube.com/watch?v=${chapter.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {chapter.videoId}
              </a>
            </p>
            {/* <p className="text-gray-600 mt-2">
              <span className="font-bold">Content:</span> {JSON.stringify(chapter.content)}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishScreen;
