const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-[url('/footer.png')] bg-cover bg-no-repeat w-full lg:h-[200px] sm:h-[300px] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-6 gap-6">
        <div className="w-full sm:w-[40%] text-black">
          <p className="text-base sm:text-lg">Contact Info</p>
          <h1 className="text-sm sm:text-base lg:text-xl font-bold">
            We are always happy to assist you
          </h1>
        </div>

        <div className="w-full sm:w-[30%] text-black leading-6 sm:leading-[32px]">
          <p className="font-bold text-sm sm:text-base">+237 085 218 197</p>
          <p className="underline font-bold text-sm sm:text-base">
            wecare@myrtleng.com
          </p>
          <p className="text-xs sm:text-sm mt-4">
            Eleganza House, 9th Floor, 634 Adeyemo Alakija St, Victoria Island,
            Lagos
          </p>
        </div>
      </div>

      <div className="flex justify-center bg-black text-white text-[10px] sm:text-sm p-5">
        <p>© 2025 Myrtle Financial Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
