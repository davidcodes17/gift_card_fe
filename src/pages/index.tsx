import Footer from "@/layouts/footer";
import Forms from "@/layouts/forms";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";

const Home = () => {
  return (
    <div className="">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-60 pt-6 sm:pt-10">
        <Header />
        <Hero />
        <Forms />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
