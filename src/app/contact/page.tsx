const page = () => {
  return (
    <div>
      <div className="relative bg-Primary pt-32 pb-24">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="-mb-1 w-full text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-8">
          <h2 className="mb-6 text-center font-sans text-3xl font-semibold tracking-tight text-white sm:text-[40px] sm:leading-none">
            We’re Here to Help <br />
            <span> Let’s Stay Connected</span>
          </h2>
          <p className="text-center text-[16px] text-white max-w-3xl mx-auto">
            Whether you have a question about a recall, want to report a product
            issue, or need help using the app, we’re just a message away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
