export default function Custom404() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Texto */}
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-800">
                Uh oh, we can’t find that page...
              </h1>
              <p className="mt-4 text-gray-600">
                Sorry, the page you are looking for doesn’t exist or has been moved. Try searching our site:
              </p>
              <div className="mt-6">
                <form className="flex">
                  <input
                    type="text"
                    placeholder="Search our site"
                    className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
  
            {/* Imagen */}
            <div className="relative">
              <img
                src="/images/mountains.jpeg"
                alt="Mountains"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  