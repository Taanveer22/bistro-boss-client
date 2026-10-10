const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mb-12 space-y-3 w-3/4 lg:w-1/4 mx-auto">
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h2 className="text-2xl sm:text-4xl font-bold text-gray-400 p-2 border-y-2 border-gray-300">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
