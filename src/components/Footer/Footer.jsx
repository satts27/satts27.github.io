const Footer = () => {
  return (
    <div id="footer" className="sticky bottom-0 w-full">
      <div>Footer11111111111111111111</div>
      <div className="relative h-[100vh] bg-pinkish flex items-center justify-center">
        <div className="flex items-center justify-center w-full">
          {/* Left Section: Email, Phone Number, Address */}
          <div className="w-3/5 font-heading p-10 flex flex-col items-center">
            <div className="mb-4 text-center">suryasatishganiga@gmail.com</div>
            {/* Phone Number and Address */}
            <div className="flex justify-between">
              <div>+91 8850260523</div>
              <div>Mumbai, Maharashtra</div>
            </div>
          </div>

          {/* Right Section: Placeholder for S2 */}
          <div className="w-2/5">S2</div>

          {/* Absolute Positioned Element: @SATTS27 */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1 text-[270px] font-heading text-creme text-border-black">
            @SATTS27
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
