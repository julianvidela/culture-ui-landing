import React from "react";

const CommentWithPhoto = () => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto dark:bg-slate-800">
      <img
        className="w-32 h-32 md:w-48 md:h-45 md:rounded-none rounded-full mx-auto md:mx-0"
        src="/images/fotopersona.jpeg"
        alt="Sarah Dayan"
        width="350"
        height="400"
      />
      <div className="pt-6 md:pt-0 md:pl-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            "No dejes que la opinión de alguien sobre ti se convierta en tu realidad".
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">Sarah Othen</div>
          <div className="text-gray-700 dark:text-gray-400">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default CommentWithPhoto;
