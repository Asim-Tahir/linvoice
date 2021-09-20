import tw from "twin.macro";

export default tw.div`
  fixed inset-0 top-[7%] left-1/2
  inline-flex flex-col
  max-w-2xl h-[min-content] w-[600px] max-h-[85%]
  p-6 my-8
  overflow-y-auto
  text-left align-middle
  transition-all transform -translate-x-1/3
  bg-white dark:bg-gray-800
  shadow-xl rounded-2xl
`;
