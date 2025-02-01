import React from "react";

const RememberMeOptions = () => {
  return (
    <div className="flex flex-col space-y-6 p-6 border rounded-lg shadow-md w-80 bg-white">
      {/* Checkbox */}
      <div className="flex items-start space-x-3">
        <input
          id="checkbox-1"
          type="checkbox"
          className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <div>
          <label htmlFor="checkbox-1" className="font-medium text-gray-800">
            Remember me
          </label>
          <p className="text-sm text-gray-500">Save my login details for next time.</p>
        </div>
      </div>

      {/* Radio Button */}
      <div className="flex items-start space-x-3">
        <input
          id="radio-1"
          type="radio"
          name="remember-options"
          className="h-5 w-5 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <div>
          <label htmlFor="radio-1" className="font-medium text-gray-800">
            Remember me
          </label>
          <p className="text-sm text-gray-500">Save my login details for next time.</p>
        </div>
      </div>

      {/* Checkbox (unchecked) */}
      <div className="flex items-start space-x-3">
        <input
          id="checkbox-2"
          type="checkbox"
          className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <div>
          <label htmlFor="checkbox-2" className="font-medium text-gray-800">
            Remember me
          </label>
          <p className="text-sm text-gray-500">Save my login details for next time.</p>
        </div>
      </div>

      {/* Radio Button (unchecked) */}
      <div className="flex items-start space-x-3">
        <input
          id="radio-2"
          type="radio"
          name="remember-options"
          className="h-5 w-5 text-blue-500 border-gray-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        />
        <div>
          <label htmlFor="radio-2" className="font-medium text-gray-800">
            Remember me
          </label>
          <p className="text-sm text-gray-500">Save my login details for next time.</p>
        </div>
      </div>
    </div>
  );
};

export default RememberMeOptions;
