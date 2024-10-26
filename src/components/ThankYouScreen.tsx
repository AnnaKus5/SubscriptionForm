const ThankYouScreen = () => {
    return (
        <div className="bg-white p-6 rounded-lg text-center max-w-md mx-auto space-y-4">
          {/* Icon container */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-strawberryRed rounded-full flex items-center justify-center">
              <img src="\images\icon-thank-you.svg" alt="" />
            </div>
          </div>
    
          {/* Text content */}
          <h1 className="text-marineblue text-3xl font-bold">
            Thank you!
          </h1>
          
          <p className="text-coolGray text-base leading-relaxed">
            Thanks for confirming your subscription! We hope you have fun using our
            platform. If you ever need support, please feel free to email us at{' '}
            <span className="text-marineblue">
              support@loremgaming.com
            </span>
            .
          </p>
        </div>
      );
}
 
export default ThankYouScreen;