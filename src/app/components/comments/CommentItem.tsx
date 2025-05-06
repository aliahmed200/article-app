import { FaEdit, FaTrash } from "react-icons/fa";
const CommentItem = () => {
  return (
    <div className="flex justify-between  bg-amber-50 px-4 p-2 rounded-lg shadow min-h-24">
      <div className="flex flex-col justify-between">
        <strong className="text-gray-800 uppercase">Ali</strong>
        <p className="text-gray-800 mb-2">Thanks for this Article</p>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-center items-center">
          <FaEdit className="text-green-600 text-xl cursor-pointer me-3" />
          <FaTrash className="text-red-600 text-xl cursor-pointer" />
        </div>
        <span className="bg-black px-1 rounded-lg text-white">1/1/2025</span>
      </div>
    </div>
  );
};

export default CommentItem;
