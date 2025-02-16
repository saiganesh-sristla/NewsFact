const ModernLoader = ({ isLoading }) => {
    if (!isLoading) return null
  
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-10 z-50">
        <div className="bg-white rounded-lg p-8 flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-semibold text-gray-700">Analyzing text...</p>
        </div>
      </div>
    )
  }
  
  export default ModernLoader